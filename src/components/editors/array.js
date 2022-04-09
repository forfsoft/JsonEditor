import * as React from 'react';
import { styled } from '@mui/material/styles'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import JsonFormBuilder from './formbuilder'

export default function JsonArrayEdit(props) {
    function loopBuild(schema, data) {
        //console.log('array sub item:' + schema.maxItems)
        var components = [];
        if (schema.maxItems === undefined || schema.maxItems === 0) {
            components.push(<JsonFormBuilder schema={schema.items} data={data[0]} />)
        } else {
            for (var i = 0; i < schema.maxItems; i++) {
                if (data[i] !== undefined) {
                    var alias = schema.items.type + "_" + schema.items.title + "_" + i
                    components.push(<JsonFormBuilder key={alias} schema={schema.items} data={data[i]} index={i} />)
                }
            }
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
        borderLeft: '10px solid rgba(150, 0, 0, .15)'
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
                {loopBuild(props.schema, props.data)}
            </DepthAccordion>
        </div>
    );
}