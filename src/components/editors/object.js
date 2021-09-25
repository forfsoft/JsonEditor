import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import JsonFormBuilder from './formbuilder'

const jsonSchema = {
    "title": "root",
    "type": "array",
    "minItems": 1,
    "maxItems": 3,
    "items": {
      "title": "group",
      "type": "object",
      "properties": {
        "latitude": {
          "title": "number1",
          "type": "number",
          "minimum": -90,
          "maximum": 90
        },
        "longitude": {
          "title": "number2",
          "type": "number",
          "minimum": -180,
          "maximum": 180
        }
      }
    }
  }

  
export default function JsonObjectEdit(props) {
    function loopBuild(properties, data) {
        var components = [];
        for(var key in properties){
            console.log('object loop count:', key, properties[key])
            components.push(<JsonFormBuilder schema={properties[key]} data={data} />)
        }
        return components;
    }

  return (
    <div>
          <div>
              <Accordion>
                  <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header">
                      <Typography>{props.schema.title}</Typography>
                  </AccordionSummary>
                {loopBuild(props.schema.properties, props.data)}
              </Accordion>
          </div>
      </div>
  );
}