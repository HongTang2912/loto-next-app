import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default function AlertDialogSlide({ open, setOpen, title, body }) {

  
    return (
        <>
            {
                open &&
                (
                    <Stack sx={{ width: '100%' }}
                        spacing={2}
                    >

                        <Alert severity="success" className={`text-xl font-bold`}>{body}</Alert>

                    </Stack >
                )
            }

        </>

    );
}
