import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import InputName from '/components/Inputname'
import io from 'socket.io-client'
import {useEffect} from 'react'


export default function Home() {


  return (
    <div className={`${styles.container} flex flex-col gap-2 items-center h-screen justify-center p-4`}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Silkscreen&display=swap" rel="stylesheet" />
      </Head>

      <InputName/>
    </div>
  )
}
