import { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import { Spring, animated } from "react-spring";
// import Cookies from "universal-cookie";
import { Stack, Button } from "@mui/material";
import { BsArrowReturnLeft } from "react-icons/bs";
import Dialog from "/utils/Dialog";
import { elementTypeAcceptingRef } from "@mui/utils";

export default function PlayersList({
  socket,
  room_id,
  player,
  color,
  actions,
}) {
  const [winner, setWinner] = useState("");
  const [isWon, setWon] = useState(false);
  const [end, setEnd] = useState(false);
  const [newNumber, setNewNumber] = useState(0);
  const [playersList, setPlayersList] = useState([]);
  const [tables, setTables] = useState([]);
  const [isStarted, setStartGame] = useState(false);
  const [count, setCount] = useState(0);
  const [callNumberClick, setCallNumberClick] = useState(false);

  const LottoTable = useRef();

  const UnResigned = () => {
    // actions.setResigned(false);s
    socket.emit("remove-user", { player, room_id });
    window.location.reload();
  };

  useEffect(() => {
    // console.log(socket);
    socket.on("new-user", (user) => {
      setPlayersList([...user]);
    });
    socket.on("new-game", (game, start) => {
      const newArr = [];
      while (game?.length) newArr.push(game.splice(0, 5));

      setTables((prev) => [...prev, ...newArr]);
      setStartGame(start);
    });
    socket.on("get-number", (number, count, p, room) => {
      console.log(number[count]);
      setNewNumber(number[count]);
      if (fillBingoNumber(number) == 5) {
        socket.emit("end-game", number, room);
      }
    });

    socket.on("the-winner", (list, room, winner) => {
      setWon(true);
      setEnd(true);
      setWinner(winner);
    });
  }, [socket]);

  const fillBingoNumber = (number) => {
    let lastNumbers = number[number.length - 1];
    let element = LottoTable.current.querySelector(
      `div div#sub-table-${lastNumbers}`
    );

    if (number.length > 0 && element != null) {
      element.style.transition = "all ease 0.4s";
      element.style.backgroundColor = color;
      element.style.color = "#fff";
      element.id = "bingo";

      let count_bingo = 0;
      for (let i = 0; i < 5; i++) {
        if (element.parentNode.childNodes[i].id == "bingo") {
          count_bingo++;
        }
      }

      return count_bingo;
    }
  };

  const startTheGame = () => {
    socket.emit(
      "start-game",
      actions.uniqueObjects(playersList),
      room_id,
      isStarted
    );
  };
  const callANumber = () => {
    socket.emit("call-number", room_id, count, player, room_id);
    setCount(count + 1);

    setCallNumberClick(true);

    setTimeout(
      () => {
        setCallNumberClick(false);
      },
      process.env.NODE_ENV == "development" ? 0 : 2000
    );
  };

  return (
    <>
      {!isStarted ? (
        <div>
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
            id="list"
          >
            <ListItem>
              <ListItemText
                primary={"Hello " + player}
                secondary={"welcome to room " + room_id}
              />
            </ListItem>
            {actions.uniqueObjects(playersList).map((p, i) => (
              <ListItem key={i}>
                <ListItemAvatar>
                  <Avatar>
                    <ImageIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={p.player} />
              </ListItem>
            ))}
          </List>
          <Stack direction="row" spacing={2}>
            <Button
              variant="outlined"
              color="error"
              onClick={() => UnResigned()}
            >
              <BsArrowReturnLeft />
            </Button>

            {actions.uniqueObjects([...playersList])[0]?.player == player ? (
              <Button
                disabled={actions.uniqueObjects([...playersList])?.length < 2}
                variant="contained"
                className={`bg-blue-500 
                        `}
                onClick={() => {
                  startTheGame();
                }}
              >
                <a>START!</a>
              </Button>
            ) : (
              <></>
            )}
          </Stack>
        </div>
      ) : (
        <></>
      )}

      <div
        className="flex flex-col items-center gap-4 lotto-table"
        ref={LottoTable}
      >
        {isStarted ? (
          <div className={`text-8xl pixel-font`} style={{ color: color }}>
            {newNumber}
          </div>
        ) : (
          <></>
        )}

        <div className={`relative flex justify-center flex-col`}>
          {isStarted ? (
            <>
              <div
                className={`text-clip text-2xl pixel-font w-fit`}
                style={{ color: color }}
              >
                {player}
              </div>
              <div className={`flex justify-center`}>
                <div
                  className={`absolute top-0 opacity-80 h-full flex flex-col justify-center`}
                >
                  <Dialog
                    open={isWon}
                    setOpen={setWon}
                    title={"Bingooooo!"}
                    body={winner}
                  />
                </div>
                <div className={`p-3 w-fit`}>
                  {tables[0]?.map((items, index) => {
                    return (
                      <div
                        className="flex items-center justify-between"
                        key={index}
                      >
                        {items.map((subItems, sIndex) => {
                          return (
                            <div
                              key={sIndex}
                              className="p-3 m-1 text-4xl font-bold text-center rounded-full"
                              id={`sub-table-${subItems}`}
                            >
                              {subItems >= 10 ? subItems : "0" + subItems}
                            </div>
                          );
                        })}
                      </div>
                    );
                  })}
                </div>
              </div>
            </>
          ) : (
            <></>
          )}
        </div>

        {!isStarted ||
        actions.uniqueObjects([...playersList])[0]?.player != player ? (
          <></>
        ) : (
          <Button
            disabled={
              end ||
              callNumberClick ||
              actions.uniqueObjects([...playersList])[0]?.player != player
            }
            variant="contained"
            className={`bg-blue-500 
                            `}
            onClick={() => {
              callANumber();
            }}
          >
            <a>{"Call Number"}</a>
          </Button>
        )}
      </div>
    </>
  );
}
