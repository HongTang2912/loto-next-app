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
                        <div key={i}>
                            <Stack sx={{ width: '100%' }}
                                spacing={2}
                            >
                                <Alert severity="success" className={`text-3xl font-bold`}>The winner is <b>{b.winner}</b></Alert>
                                {/* <Alert severity="success" className={`text-3xl font-bold`}> */}
                                    <div className='flex justify-between bg-blue'>
                                        {
                                        b.winnerNumbers.map((num) => (
                                            <span className="block-num text-4xl text-white rounded-md">
                                                {num}
                                            </span>
                                        ))
                                        }
                                    </div>
                                {/* </Alert> */}
                            </Stack >
                        </div>
                    ))
                )
            }

        </>
    );
}
