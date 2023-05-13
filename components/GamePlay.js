import { useState, useEffect, useRef } from "react";

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import Stack from '@mui/material/Stack';
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import {SiOpenmined} from "react-icons/si"


import Dialog from "/utils/WinnerPopup";


import { SocketContext} from '../store/socketStore';
import { useContext } from "react";

export default function GamePlay({
  room_id,
  user,
  color,
  setIsMountAnimation,
  resigningState,
  playersState
}) {
  const [winner, setWinner] = useState("");
  const [isWon, setWon] = useState(false);
  // const [end, setEnd] = useState(false);
  const [newNumber, setNewNumber] = useState(0);
  const [playersList, setPlayersList] = useState([]);
  const [tables, setTables] = useState([]);
  const [isStarted, setStartGame] = useState(false);
  const [count, setCount] = useState(-1);
  const [callNumberClick, setCallNumberClick] = useState(false);
  const [listCalledNumber, setListCalledNumber] = useState([]);

  const LottoTable = useRef();

  const {socket} = useContext(SocketContext);
  

  const UnResigned = () => {
    socket.emit("remove-user", { id: socket.id, room_id });
    resigningState.setResigned(false);
    // window.location.reload();
  };

  // Start game function
  const startTheGame = () => {
    // Dispatch the "start-game" emmition to socket.io server
    socket.emit(
      "start-game",
      {
        players: playersList,
        room: room_id,
      }
    );
  };

  const callANumber = () => {
    socket.emit("call-number", room_id, count, user.id, room_id);
    setCount(count + 1);

    setCallNumberClick(true);

    setTimeout(
      () => {
        setCallNumberClick(false);
      },
      process.env.NODE_ENV == "development" ? 0 : 2000
    );
  };

  // Click to select the number which has appeared on the called numbers array
  const handleClickNumber = (num) => {
    if(!isWon){
    let element = LottoTable.current.querySelector(`div div#sub-table-${num}`);
   
    if (listCalledNumber.includes(num) && element) {
      element.style.animationName = "zoomBig";
      element.style.animationDuration = "0.5s";
      element.style.animatopnTimingFunction = "linear";
      element.style.backgroundColor = color;
      element.style.color = "#fff";
      element.id = "bingo";
      const audio  = new Audio('../media/audio/pop-thock.mp3');
      audio.play();
      const rowNumbers = Array.prototype.map.call(
        element.parentNode.childNodes,
        (ele) => {
          if (ele.id === "bingo") {
            
            return ele.innerHTML;
          }
          
        }
      );
      const isBingo = Array.prototype.every.call(
        element.parentNode.childNodes,
        (ele) => {
          if (ele.id === "bingo") {

            return true;
          }
          return false;
        }
      );

   

      if (isBingo) {
        socket.emit("end-game", {winner: user.player, room_id, rowNumbers});
      }
    }
   
  }
  };

  // Dispatch an action when socket's instances were changed
  useEffect(() => {
    try{
      socket.on("new-user", (user) => {
        setPlayersList(user !== null ? [...user] : []);
      });
      socket.on("new-game", (playerSlot) => {
        if (playerSlot.table.length != 0) {
          setTables(playerSlot.table);
        }
        setCount(0);
        setWon(false);
        setStartGame(true);
        setIsMountAnimation(false);
        setNewNumber(0)
      });
      socket.on("get-number", (number, count) => {
        setNewNumber(number[count]);
        setListCalledNumber(number);
      });

      socket.on("the-winner", (winnerArray) => {
        setWon(true);
        // setEnd(true);
        setWinner(
          winnerArray
        );
      });
    } catch(err ) {
      console.log(err);
    }
  }, [socket]);

  return (
    <>
      <div
        id="lotto-table"
        className="relative flex flex-col items-center gap-4"
        ref={LottoTable}
      >
        {isStarted ? (
          <>
            {isWon && <div
              className={`absolute border-none top-0 right-0 opacity-80 h-full `}
            >
              <Dialog 
              isWon={isWon} 
              body={winner}
              resigningState={{setResigned: resigningState.setResigned}} 
              playersState={{setPlayer: playersState.setPlayer}} 
              player={user}
              setStartGame={setStartGame}
              // setWon={setWon}
              UnResigned={UnResigned}
              // setCount={setCount}
              />
            </div>}
            <div className={`text-8xl pixel-font`} style={{ color: color }}>
              {newNumber ? newNumber : "#"}
            </div>
            <div className={`relative flex justify-center flex-col items-center`}>
              <div
                className={`text-clip  text-2xl pixel-font w-fit`}
                style={{ color: color }}
              >
                {user.player}
              </div>
              <div id="table">
              
                <div className={`p-3 w-fit`}>
                  {tables?.map((items, index) => {
                    return (
                      <div
                        className="flex items-center justify-between"
                        key={index}
                      >
                        {items.map((subItems, sIndex) => {
                          return (
                            <div
                              onClick={() => handleClickNumber(subItems)}
                              key={sIndex}
                              className="noselect w-16 p-3 m-1 text-4xl font-semibold text-center rounded-full "
                              id={`sub-table-${subItems}`}
                            >
                              {subItems}
                            </div>
                          );
                        })}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <Stack direction="row" spacing={2}>
              <div className="border-2 border-red-500 rounded-full">

                <IconButton

                  color="error"
                  onClick={() => UnResigned()}
                >
                  <KeyboardReturnIcon />
                </IconButton >
              </div>


              {!(playersList[0]?.id != socket.id) && (
                  <Button
                    disabled={
                      isWon ||
                      callNumberClick ||
                      [...playersList][0]?.id != socket.id
                    }
                    variant="contained"
                    className={`bg-blue-500 
                            `}
                    onClick={() => {
                      callANumber();
                    }}
                  >
                    <a>Call Number</a>
                  </Button>
                  
                )}
                
            </Stack>
             
          </>
        ) : (
          <>
            <List
              sx={{ bgcolor: "background.paper" }}
              id="list"
                className="md:max-w-[800px]"
            >
              <ListItem className="flex flex-col items-center">
                {/* <ListItemText
                  primary={"Hello " + user.player}
                  secondary={"welcome to room " + room_id}
                /> */}
                <div className="sm:text-xl md:text-2xl text-lg text-center mb-4">

                  {/* <div className="block mb-2 italic font-bold">Hello lotter <b className="bg-blue-200 text-blue-600 p-1 rounded-md">{user.player}</b></div> */}
                  <div className="block ">Room <mark 
                      className="bg-yellow-200 text-yellow-600 p-1 rounded-md"
                    >
                      {room_id}
                    </mark></div>
                </div>
              </ListItem>
              <ListItem> <ul className="flex gap-2 flex-wrap justify-center ">

                {playersList.map((p, i) => (
                  // <ListItemAvatar>
                  //   {/* <Avatar>
                  //     <ImageIcon />
                  //   </Avatar> */}
                  //    <div className="block mb-2 italic font-bold"><b className="bg-blue-200 text-blue-600 p-1 rounded-md">{user.player}</b></div>
                  // </ListItemAvatar>
                  // <ListItemText primary={p.player} />
                    user.player == p.player ?
                  <li key={i} className="py-1">
                    
                    <div className="block mb-2 italic font-bold">
                      <b className="bg-orange-200 text-orange-600 p-2 rounded-md text-md sm:text-xl">
                        {p.player}
                      </b>
                      </div>
                  </li>
                  :
                   <li key={i} className="py-1">
                    <div className="block mb-2 italic font-bold"><b className="bg-blue-200 text-blue-600 p-2 rounded-md text-md sm:text-xl">{p.player}</b></div>
                  </li>
                ))}
              </ul>
              </ListItem>
            </List>
            <Stack direction="row" spacing={2}>


              <div className="bg-red-400 text-red-300 p-1 rounded-full">

                <IconButton

                  // color="error"
                 
                  onClick={() => UnResigned()}
                >
                  <KeyboardReturnIcon />
                </IconButton >
              </div>

              {[...playersList][0]?.id == socket.id ? (
                <Button
                  disabled={[...playersList]?.length < 2}
                  variant="contained"
                  className={`bg-blue-500 `}
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
          </>
        )
        }
      </div >
    </>
  );
}
