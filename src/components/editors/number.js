import * as React from 'react';
import AccordionDetails from '@mui/material/AccordionDetails';
import TextField from '@mui/material/TextField';
import JsonSelectEdit from './select'

export default function JsonNumberEdit(props) {
    return (
        <AccordionDetails>
            {(props.schema.enum === undefined) ?
                <TextField
                    fullWidth
                    id="outlined-required"
                    label={props.schema.title}
                    defaultValue={props.data}
                    type="number"
                    InputLabelProps={{ shrink: true }}
                    size="small"
                /> :
                <JsonSelectEdit index={props.index} schema={props.schema} data={props.data} />
            }
        </AccordionDetails>
    );
}