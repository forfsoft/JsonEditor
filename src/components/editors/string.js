import * as React from 'react';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

export default function JsonStringEdit(props) {

    return (
        <AccordionDetails>
            <TextField
                fullWidth
                id="outlined-required"
                label={props.schema.title}
                InputLabelProps={{ shrink: true }}
                size="small"
            />
        </AccordionDetails>
    );
}