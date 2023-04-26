import * as React from "react";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { SocketContext} from '../store/socketStore';
import { useContext } from "react";


export default function Inputname({playersState, resigningState}) {
  
  const [filled, setInputField] = React.useState(false);
  const {socket, setSocket} = useContext(SocketContext);

  const playerName = React.useRef();
  const roomID = React.useRef();

  const handleClickGo = (playerName, roomID) => {
    const name_roomID = {
      p_id: socket.id,
      player: playerName.current.childNodes[1].childNodes[0].value,
      room_id: roomID.current.childNodes[1].childNodes[0].value,
    };
    socket.emit("get-user", name_roomID);
    resigningState.setResigned(true);
    playersState.setPlayer(name_roomID);
  };

  const handleInputField = (playerName, roomID) => {
    return (
      playerName?.current?.childNodes[1].childNodes[0].value &&
      roomID?.current?.childNodes[1].childNodes[0].value
    );
  };

  const joinRoom = (roomID) => {
    if (roomID.current.childNodes[1].childNodes[0].value !== "") {
      socket.emit(
        "join_room",
        roomID.current.childNodes[1].childNodes[0].value
      );
    }
  };

  return (
    <div className={`w-max`}>
      <h1 className={"pixel-font text-center text-5xl mb-3"}>Lottto</h1>
      <div className={`flex flex-col gap-3 items-center justify-center px-3 `}>
        <TextField
          required
          id="outlined-required"
          label="Input your name"
          onChange={() => {
            setInputField(handleInputField(playerName, roomID));
          }}
          ref={playerName}
        />

        <TextField
          required
          id="outlined-required"
          label="Room ID"
          onChange={() => {
            setInputField(handleInputField(playerName, roomID));
          }}
          ref={roomID}
        />

        <Button
          disabled={!filled}
          variant="contained"
          className={`bg-blue-500`}
          onClick={() => {
            joinRoom(roomID);
            handleClickGo(playerName, roomID);
          }}
        >
          Go!
        </Button>
      </div>
    </div>
  );
}
