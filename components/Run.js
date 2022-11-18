import React from "react";
import io from "socket.io-client";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import InputName from "./Inputname";
import PlayersList from "./PlayersList/playersList";
const socket = io.connect("http://localhost:3001/");

export default function Run() {
  const [isResigned, setResigned] = React.useState(false);
  const [player, setPlayer] = React.useState({});

  const colors = [
    "#e97b40",
    "#e9cbff",
    "#99ccdd",
    "#a4daef",
    "#aaddee",
    "#009489",
    "#fdc8c0",
    "#8de8e8",
    "#ac92c0",
    "#ab92b3",
  ];

  const handleClickGo = (playerName, roomID) => {
    const name_roomID = {
      player: playerName.current.childNodes[1].childNodes[0].value,
      room_id: roomID.current.childNodes[1].childNodes[0].value,
    };
    socket.emit("get-user", name_roomID);
    setResigned(true);
    setPlayer(name_roomID);
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

  const uniqueObjects = (arr) => [
    ...new Map(arr.map((item) => [item.player, item])).values(),
  ];

  const startTheGame = (playersList, room_id, isStarted) => {
    socket.emit("start-game", uniqueObjects(playersList), room_id, isStarted);
  };
  const callANumber = (
    setCallNumberClick,
    setCount,
    room_id,
    count,
    player
  ) => {
    socket.emit("call-number", room_id, count, player, room_id);
    setCount(count + 1);

    setCallNumberClick(true);

    setTimeout(() => {
      setCallNumberClick(false);
    }, 0);
  };

  const actions = {
    register: { joinRoom, handleInputField, handleClickGo },
    game_play: { startTheGame, callANumber, uniqueObjects },
  };

  return (
    <div
      className={`${styles.container} flex flex-col gap-2 items-center h-screen justify-center`}
    >
      {!isResigned && <InputName actions={actions.register} colors={colors} />}
      {isResigned && (
        <PlayersList
          socket={socket}
          player={player.player}
          room_id={player.roomID}
          color={colors[Math.floor(Math.random() * 9)]}
          actions={actions.game_play}
        />
      )}
    </div>
  );
}
