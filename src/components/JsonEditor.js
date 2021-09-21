import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const jsonData = [
  {"data1":"a","data2":"b"},
  {"data1":"a1","data2":"b2"}
]
https://github.com/jdorn/json-editor/blob/master/src/validator.js
export default function JsonEditor() {

  function formRoot(key, data) {
    console.log(key, data)
    return (      
            <Accordion key={key}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>{data.data1}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
    )
  }

  function formBuild(data) {
    return (
      <div>
        { 
          Object.keys(data).map((e, i) => {
            return formRoot(i, data[e]);
          })
        }
      </div>
    )
  }

  return (
    <div>
      {formBuild(jsonData)}
      {/* <div>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>test</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
          </AccordionDetails>
        </Accordion>
      <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Accordion 2</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
          </AccordionDetails>
        </Accordion>
      </div> */}
    </div>
  );
}