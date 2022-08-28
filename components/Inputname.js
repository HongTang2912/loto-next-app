import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Link from 'next/link'
import io from 'socket.io-client'
import PlayersList from './PlayersList/playersList'
import Cookies from 'universal-cookie'

const cookies = new Cookies()
const socket = io.connect("https://loto-backend.herokuapp.com/")
export default function Inputname() {

    const [isResigned, setResigned] = React.useState(false)
    const playerName = React.useRef();
    const roomID = React.useRef();

    const handleClickGo = () => {
        cookies.set('user', {
            player: playerName.current.childNodes[1].childNodes[0].value,
            room_id: roomID.current.childNodes[1].childNodes[0].value
        })
     
        socket.emit('get-user', {
            player: playerName.current.childNodes[1].childNodes[0].value,
            room_id: roomID.current.childNodes[1].childNodes[0].value
        })
    }

    const joinRoom = () => {
        if (roomID.current.childNodes[1].childNodes[0].value !== "") {
            socket.emit('join_room', roomID.current.childNodes[1].childNodes[0].value)
        }
    }

    return (
        <>
            <h1 className={"pixel-font text-center text-5xl"}>Lottto</h1>
            <div className={`flex flex-col gap-3 ${!isResigned ? 'block' : 'hidden'}`}>

                <TextField
                    required
                    id="outlined-required"
                    label="Input your name"
                    defaultValue={cookies.get("user")?.player}
                    ref={playerName}
                />

                <TextField
                    required
                    id="outlined-required"
                    label="Room ID"
                    defaultValue={cookies.get("user")?.room_id}
                    ref={roomID}
                />

                <Button
                    variant="contained"
                    className={`bg-blue-500`}
                    onClick={() => { joinRoom(); handleClickGo(); setResigned(!isResigned) }}
                >

                    Go!

                </Button>

            </div>
            <div className={isResigned ? 'block' : 'hidden'}>

                <PlayersList

                    socket={socket}
                    player={playerName.current?.childNodes[1].childNodes[0].value}
                    room_id={roomID.current?.childNodes[1].childNodes[0].value}
                />
            </div>
        </>
    )
}
