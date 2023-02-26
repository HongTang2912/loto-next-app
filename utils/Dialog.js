import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default function AlertDialogSlide({ open, body }) {


    return (
        <>
            {
                open &&
                (
                    [...new Set(body)]?.map((b, i) => (
                        <>
                        <div key={i}>
                            <Stack sx={{ width: '100%' }}
                                spacing={2}

                            >

                                <Alert severity="success" className={`text-xl font-bold`}>{`The winner is ${b}`}</Alert>

                            </Stack >
                        </div>
                        </>
                    ))
                )
            }

        </>

    );
}
