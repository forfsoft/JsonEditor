import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import JsonFormBuilder from './formbuilder'

export default function JsonObjectEdit(props) {
  function loopBuild(index, properties, data) {
    var components = [];
    for (var key in properties) {
      console.log('object loop count:', key, properties[key])
      components.push(<JsonFormBuilder index={index} schema={properties[key]} data={data} />)
    }
    return components;
  }

  function groupName() {
    var outputName = props.schema.title;
    if (undefined != props.index) {
      outputName += "-" + props.index;
    }
    return outputName;
  }

  return (
    <div>
      <div>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header">
            <Typography>{groupName()}</Typography>
          </AccordionSummary>
          {loopBuild(props.index, props.schema.properties, props.data)}
        </Accordion>
      </div>
    </div>
  );
}