import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide({ open, setOpen, title, body }) {

    const [isDisabledButton, setDisabledButton] = React.useState(false)

    React.useEffect(() => {
        setDisabledButton(true)
        setTimeout(() => {
            setDisabledButton(false)
        })
    })


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
