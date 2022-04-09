import * as React from 'react';
import AccordionDetails from '@mui/material/AccordionDetails';
import TextField from '@mui/material/TextField';

export default function JsonNumberEdit(props) {
    return (
        <AccordionDetails>
            <TextField
                fullWidth
                id="outlined-required"
                label={props.schema.title}
                defaultValue={props.data}
                type="number"
                InputLabelProps={{ shrink: true }}
                size="small"
            />
            {/* <Slider aria-valuetext='asdf' defaultValue={props.value} step={1} marks min={0} max={100} valueLabelDisplay="auto" /> */}
        </AccordionDetails>
    );
}