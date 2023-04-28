import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
// import { TransitionProps } from '@mui/material/transitions';

import {RiTodoLine} from 'react-icons/ri'

const Transition = React.forwardRef(function Transition(
  props,
  ref
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function WinnerPopup({ body }) {
  const [open, setOpen] = React.useState(true);
  

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="text-center">
      <button className='rounded-l-xl bg-green-500 text-white p-2 text-3xl' onClick={handleClickOpen}>
        <RiTodoLine/>
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
            <div className='flex gap-2 lg:text-4xl sm:text-2xl justify-center'>
            {
                body[0].winnerNumbers.map((n,index) => (
                    <div 
                        key={index} 
                        className="lg:h-28 lg:w-28 sm:h-16 sm:w-16 h-8 w-8 rounded-full bg-green-200 text-green-500 flex justify-center items-center"
                    >
                        {n}
                    </div>
                ))
            }
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>OK</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}