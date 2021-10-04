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
  "type": "object",
  "properties": {
    "latitude": {
      "title": "number test",
      "type": "number",
      "minimum": -90,
      "maximum": 90
    },
    "longitude": {
      "title": "list",
      "type": "array",
      "minItems": 1,
      "maxItems": 3,
      "items": {
        "title": "group",
        "type": "object",
        "properties": {
          "latitude": {
            "title": "number test",
            "type": "number",
            "minimum": -90,
            "maximum": 90
          },
          "longitude": {
            "title": "string test",
            "type": "string"
          }
        }
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