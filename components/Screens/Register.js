import React from "react";

import { BsArrowReturnLeft } from "react-icons/bs";

import { ImageIcon } from "@mui/icons-material";

import {
  Stack,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
} from "@mui/material";

export const Register = ({ socket, player, room_id, playersList, }) => {
  const UnResigned = () => {
    socket.emit("remove-user", { player, room_id });
    window.location.reload();
  };

  // Start game function
  const startTheGame = () => {
    // Dispatch the "start-game" emmition to socket.io server
    socket.emit(
      "start-game",
      actions.uniqueObjects(playersList),
      room_id,
      true
    );
  };

  return (
    <>
      <List
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        id="list"
      >
        <ListItem>
          <ListItemText
            primary={"Hello " + player}
            secondary={"welcome to room " + room_id}
          />
        </ListItem>
        {actions.uniqueObjects(playersList).map((p, i) => (
          <ListItem key={i}>
            <ListItemAvatar>
              <Avatar>
                <ImageIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={p.player} />
          </ListItem>
        ))}
      </List>
      <Stack direction="row" spacing={2}>
        <Button variant="outlined" color="error" onClick={() => UnResigned()}>
          <BsArrowReturnLeft />
        </Button>

        {actions.uniqueObjects([...playersList])[0]?.player == player ? (
          <Button
            disabled={actions.uniqueObjects([...playersList])?.length < 2}
            variant="contained"
            className={`bg-blue-500 
                        `}
            onClick={() => {
              startTheGame();
            }}
          >
            <a>START!</a>
          </Button>
        ) : (
          <></>
        )}
      </Stack>
    </>
  );
};
