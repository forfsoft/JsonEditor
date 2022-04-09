import * as React from 'react';
import AccordionDetails from '@mui/material/AccordionDetails';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


export default function JsonSelectEdit(props) {
    const [select, setSelect] = React.useState(props.data);

    const handleChange = (event) => {
        setSelect(event.target.value);
    };
    return (
        <AccordionDetails>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">{props.schema.title}</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={select}
                    defaultValue={props.data}
                    label={props.schema.title}
                    size="small"
                    onChange={handleChange}
                >
                    {Object.entries(props.schema.enum).map(([key, value], i) => <MenuItem key={key} value={value}>{value}</MenuItem>)}
                </Select>
            </FormControl>
        </AccordionDetails>
    );
}
