import * as React from 'react';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';

export default function JsonNumberEdit(props) {

    return (
        <AccordionDetails>
            <Typography>
                <div>{props.schema.title}</div>
                <Slider 
                    defaultValue={props.value}
                    step={1}
                    marks
                    min={0}
                    max={100}
                    valueLabelDisplay="auto" />
            </Typography>
        </AccordionDetails>
    );
}