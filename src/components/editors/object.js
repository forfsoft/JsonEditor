import * as React from 'react';
import { styled } from '@mui/material/styles'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import JsonFormBuilder from './formbuilder'

export default function JsonObjectEdit(props) {
  function loopBuild(index, properties, data) {
    var components = [];
    for (var key in properties) {
      //console.log('JsonObjectEdit sub item :', key, properties[key], data[key])
      var targetSchema = properties[key]
      var alias = key + "_" + targetSchema.type + "_" + targetSchema.title
      components.push(<JsonFormBuilder key={alias} index={index} schema={targetSchema} data={data[key]} />)
    }
    return components;
  }

  function groupName() {
    var outputName = props.schema.title;
    if (undefined !== props.index) {
      outputName += "-" + props.index;
    }
    return outputName;
  }

  const DepthAccordion = styled(Accordion)(({ theme }) => ({
    borderLeft: '10px solid rgba(255, 255, 255, .15)'
  }))

  return (
    <div>
      <DepthAccordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header">
          <Typography>{groupName()}</Typography>
        </AccordionSummary>
        {loopBuild(props.index, props.schema.properties, props.data)}
      </DepthAccordion>
    </div>
  );
}