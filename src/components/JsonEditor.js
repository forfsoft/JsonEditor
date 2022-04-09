import * as React from 'react';
import JsonFormBuilder from './editors/formbuilder'

const jsonData = {
  "first" : "100",
  "second" : [{
    "sub-number" : "10",
    "sub-text" : "sub text1"
  },
  {
    "sub-number" : "20",
    "sub-text" : "sub text2"
  }
]
}

const jsonSchema = {
  "title": "root",
  "type": "object",
  "properties": {
    "first": {
      "title": "number test",
      "type": "number",
      "minimum": -100,
      "maximum": 100
    },
    "second": {
      "title": "list",
      "type": "array",
      "minItems": 1,
      "maxItems": 3,
      "items": {
        "title": "group",
        "type": "object",
        "properties": {
          "sub-number": {
            "title": "sub-number",
            "type": "number",
            "minimum": -50,
            "maximum": 50
          },
          "sub-text": {
            "title": "sub-string",
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
      {formRoot(jsonSchema, jsonData)}
    </div>
  );
}