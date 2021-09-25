import * as React from 'react';
import JsonFormBuilder from './editors/formbuilder'

const jsonData = {
  "root" : [
    {"data1":"a","data2":"b"},
    {"data1":"a1","data2":"b2"},
    {"data1":"a2","data2":"b3"}
  ]
}

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

//https://github.com/jdorn/json-editor/blob/master/src/validator.js

export default function JsonEditor() {

  function formRoot(schema, data) {
    console.log(schema, data)
    return (
      <JsonFormBuilder schema={schema} data={data}/>
    )
  }

  return (
    <div>
      {formRoot(jsonSchema, undefined)}
    </div>
  );
}