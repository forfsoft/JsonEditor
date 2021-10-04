import * as React from 'react';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';

export default function JsonNumberEdit(props) {
    const rootStyle = {
        width: "100%"
      };

    const titleStyle = {
        width: "20%",
        paddingLeft: "10px",
        textAlign: "left"
      };

    const bodyStyle = {
        width: "70%"
      };

    return (
        <AccordionDetails>
            <TextField
                fullWidth
                id="outlined-required"
                label={props.schema.title}
                type="number"
                InputLabelProps={{ shrink: true }}
                size="small"
            />
            {/* <Slider aria-valuetext='asdf' defaultValue={props.value} step={1} marks min={0} max={100} valueLabelDisplay="auto" /> */}
        </AccordionDetails>
    );
}