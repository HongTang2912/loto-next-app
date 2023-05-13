import Head from "next/head";
// import Image from "next/image";
import styles from "../styles/Home.module.css";
import GamePlay from "../components/GamePlay.js";
import InputName from "/components/Inputname";
import * as React from "react";
import configColors from "../utils/configuration/colors.json";
import BackgroundAnimation from "../components/Animations/BackgroundAnimation";


import {SocketTemplate} from "../store/socketStore";


export default function Home() {
  const [isResigned, setResigned] = React.useState(false);
  const [player, setPlayer] = React.useState({});
  const [isMountAnimation, setIsMountAnimation] = React.useState(true);

  const colors = configColors;

  return (
    <SocketTemplate>
      <div
        className={`${styles.container} flex flex-col gap-2 items-center h-screen justify-center`}
      >
        <Head>
          <title>Lotto.io</title>
          <meta
            name="zalo-platform-site-verification"
            content="Rjkk4P-b22TAXfC8pAy0LZIikWlOqsnJDp8"
          />
          <meta name="keywords" content="lottto, Lottto, Lottto next app, next-app lotto, lotto js" />
          <meta name="description" content="Lottto - the bingo game" />
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
            <InputName 
              playersState={{setPlayer}}
              resigningState={{setResigned}} 
              colors={colors} 
            />
          ) : (
            <>
              <GamePlay
                playersState={{setPlayer}}
                resigningState={{setResigned}} 
                setIsMountAnimation={setIsMountAnimation}
                user={player}
                room_id={player.room_id}
                color={colors[Math.floor(Math.random() * 9)]}
              />
            </>
          )}
        </div>
      </div>
      {isMountAnimation && <BackgroundAnimation />}
    </SocketTemplate>
  );
}
