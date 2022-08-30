import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Link from 'next/link'
import io from 'socket.io-client'
import PlayersList from './PlayersList/playersList'
import Cookies from 'universal-cookie'


const socket = io.connect("https://loto-backend.herokuapp.com")

export default function Inputname() {

    const [filled, setInputField] = React.useState(false)
    const [isResigned, setResigned] = React.useState(false)
    const playerName = React.useRef();
    const roomID = React.useRef();

    const handleClickGo = () => {
        socket.emit('get-user', {
            player: playerName.current.childNodes[1].childNodes[0].value,
            room_id: roomID.current.childNodes[1].childNodes[0].value
        })
        setResigned(!isResigned)
    }

    const handleInputField = () => {
        setInputField(
            playerName?.current?.childNodes[1].childNodes[0].value &&
            roomID?.current?.childNodes[1].childNodes[0].value
        )

    }

    const joinRoom = () => {
        if (roomID.current.childNodes[1].childNodes[0].value !== "") {
            socket.emit('join_room', roomID.current.childNodes[1].childNodes[0].value)
        }
    }

    return (
        <div className={`mx-auto`}>
            <h1 className={"pixel-font text-center text-5xl"}>Lottto</h1>
            <div className={`flex flex-col gap-3 items-center ${!isResigned ? 'block' : 'hidden'}`}>

                <TextField
                    required
                    id="outlined-required"
                    label="Input your name"
                    onChange={() => { handleInputField() }}
                    ref={playerName}
                />

                <TextField
                    required
                    id="outlined-required"
                    label="Room ID"
                    onChange={() => { handleInputField() }}
                    ref={roomID}
                />

                <Button
                    disabled={!filled}
                    variant="contained"
                    className={`bg-blue-500`}
                    onClick={() => { joinRoom(); handleClickGo(); }}
                >

                    Go!

                </Button>

            </div>
            {
                isResigned && 
                <PlayersList

                    socket={socket}
                    player={playerName.current?.childNodes[1].childNodes[0].value}
                    room_id={roomID.current?.childNodes[1].childNodes[0].value}
                />
            }

            
        </div>
    )
}
