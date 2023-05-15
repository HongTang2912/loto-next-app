import { useContext, useState, forwardRef } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { SocketContext } from '../store/socketStore';

// import { TransitionProps } from '@mui/material/transitions';

import {FaCrown} from 'react-icons/fa'

const Transition = forwardRef(function Transition(
  props,
  ref,
  
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function WinnerPopup({ body,player,
  resigningState,
  setStartGame,
  playersState,
  setIsMountAnimation }) {
  const [open, setOpen] = useState(true);

  const {socket} = useContext(SocketContext);
  

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleRejoin = () => {
     if (player.player) {
      socket.emit(
        "join_room",
        player.room_id
      );
    }
    const name_roomID = {
      p_id: socket.id,
      player: player.player,
      room_id: player.room_id,
    };
    socket.emit("get-user", name_roomID);
    resigningState.setResigned(true);
    playersState.setPlayer(name_roomID);
    setStartGame(false)
    setIsMountAnimation(true)
  }

  return (
    <div className="text-center">
      <button className='rounded-l-full bg-yellow-500 text-white p-2 text-3xl' onClick={handleClickOpen}>
        <FaCrown/>
      </button>
      <Dialog
        
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        maxWidth="1000"
      >
        <DialogTitle><div className='lg:text-4xl sm:text-2xl'>The winner is <b>{body[0].winner}</b></div></DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <div className='flex gap-2 lg:text-4xl sm:text-2xl text-xl justify-center'>
            {
                body[0].winnerNumbers.map((n,index) => (
                    <div 
                        key={index} 
                        className="lg:h-20 lg:w-20 sm:h-16 sm:w-16 h-12 w-12 rounded-full bg-green-200 text-green-500 flex justify-center items-center"
                    >
                        {n}
                    </div>
                ))
            }
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
           <Button variant='contained' onClick={handleRejoin} className={`bg-blue-500`}>Re-join?</Button>
          <Button onClick={handleClose} variant='outlined'>OK</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}