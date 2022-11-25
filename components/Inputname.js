import * as React from "react";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function Inputname({ colors, actions }) {
  
  
  const [filled, setInputField] = React.useState(false);

  const playerName = React.useRef();
  const roomID = React.useRef();

  return (
    <div className={`w-max`}>
      <h1 className={"pixel-font text-center text-5xl mb-3"}>Lottto</h1>
      <div className={`flex flex-col gap-3 items-center justify-center px-3 `}>
        <TextField
          required
          id="outlined-required"
          label="Input your name"
          onChange={() => {
            setInputField(actions.handleInputField(playerName, roomID));
          }}
          ref={playerName}
        />

        <TextField
          required
          id="outlined-required"
          label="Room ID"
          onChange={() => {
            setInputField(actions.handleInputField(playerName, roomID));
          }}
          ref={roomID}
        />

        <Button
          disabled={!filled}
          variant="contained"
          className={`bg-blue-500`}
          onClick={() => {
            actions.joinRoom(roomID);
            actions.handleClickGo(playerName, roomID);
          }}
        >
          Go!
        </Button>
      </div>
    </div>
  );
}
