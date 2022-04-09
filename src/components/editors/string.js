import * as React from 'react';
import AccordionDetails from '@mui/material/AccordionDetails';
import TextField from '@mui/material/TextField';

export default function JsonStringEdit(props) {

    return (
        <AccordionDetails>
            <TextField
                fullWidth
                id="outlined-required"
                label={props.schema.title}
                defaultValue={props.data}
                InputLabelProps={{ shrink: true }}
                size="small"
            />
        </AccordionDetails>
    );
}