import * as React from 'react';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

export default function JsonStringEdit(props) {

    return (
        <AccordionDetails>
            <Typography>
                <TextField id="outlined-basic" label="object input" variant="outlined" />
            </Typography>
        </AccordionDetails>
    );
}