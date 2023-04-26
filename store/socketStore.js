import io from "socket.io-client";
import {useEffect, useState, createContext} from 'react'

const url = process.env.NEXT_PUBLIC_URL;
const SocketContext = createContext();

 const SocketTemplate = ({children}) => {
    const [socket, setSocket] = useState(null);

    useEffect(() => {
        setSocket(io.connect(url, {
            secure: true,
            rejectUnauthorized: false,
            transports: ["websocket", "polling", "flashsocket"],
        }))
    },[])

    return (
       <SocketContext.Provider value={{socket, setSocket}}>
            {children}
        </SocketContext.Provider>
    )

}

export {SocketTemplate, SocketContext};