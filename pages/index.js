import Head from "next/head";
// import Image from "next/image";
import styles from "../styles/Home.module.css";
import GamePlay from "../components/GamePlay.js";
import InputName from "/components/Inputname";
import io from "socket.io-client";
import * as React from "react";
import configColors from "../utils/configuration/colors.json";

import BackgroundAnimation from "../components/Animations/BackgroundAnimation";

const url = process.env.NEXT_PUBLIC_URL;

const socket = io.connect(url, {
  secure: true,
  rejectUnauthorized: false,
  transports: ["websocket", "polling", "flashsocket"],
});

export default function Home() {
  const [isResigned, setResigned] = React.useState(false);
  const [player, setPlayer] = React.useState({});
  const [isMountAnimation, setIsMountAnimation] = React.useState(true);

  const colors = configColors;

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

  const actions = {
    register: { joinRoom, handleInputField, handleClickGo },
    game_play: { uniqueObjects, setResigned },
  };

  return (
    <>
      <div
        className={`${styles.container} flex flex-col gap-2 items-center h-screen justify-center`}
      >
        <Head>
          <title>Lotto.io</title>
          <meta
            name="zalo-platform-site-verification"
            content="Rjkk4P-b22TAXfC8pAy0LZIikWlOqsnJDp8"
          />
          <meta name="description" content="lottto" />
          <meta name="description" content="Lottto" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Silkscreen&display=swap"
            rel="stylesheet"
          />
        </Head>

        <div className="z-50">
          {!isResigned ? (
            <InputName actions={actions.register} colors={colors} />
          ) : (
            <>
              <GamePlay
                setIsMountAnimation={setIsMountAnimation}
                socket={socket}
                player={player.player}
                room_id={player.room_id}
                color={colors[Math.floor(Math.random() * 9)]}
                actions={actions.game_play}
              />
            </>
          )}
        </div>
      </div>
      {isMountAnimation && <BackgroundAnimation />}
    </>
  );
}
