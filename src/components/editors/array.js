import * as React from 'react';
import JsonFormBuilder from './formbuilder'


const jsonSchema = {
    "title": "root",
    "type": "array",
    "minItems": 1,
    "maxItems": 3,
    "items": {
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


export default function JsonArrayEdit(props) {
    function loopBuild(schema, data) {
        console.log('array loop count:' + schema.maxItems)
        var components = [];
        if (schema.maxItems == undefined || schema.maxItems == 0) {
            components.push(<JsonFormBuilder schema={schema.items} data={data} />)
        } else {
            for (var i = 0; i < schema.maxItems; i++) {
                components.push(<JsonFormBuilder schema={schema.items} data={data} />)
            }
        }
        return components;
    }

    return (
        <div>
            {loopBuild(props.schema, props.data)}
        </div>
    );
}