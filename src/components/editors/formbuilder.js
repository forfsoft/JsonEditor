import * as React from 'react';
import JsonNumberEdit from './number'
import JsonStringEdit from './string'
import JsonObjectEdit from './object'
import JsonArrayEdit from './array'
  
export default function JsonFormBuilder(props) {

    function createForm(schema, data) {
        console.log('create form:', schema)
        if (schema.type == 'number') {
            return (<JsonNumberEdit schema={schema} data={data} />)
        }
        else if (schema.type == 'string') {
            return (<JsonStringEdit schema={schema} data={data} />)
        }
        else if (schema.type == 'object') {
            return (<JsonObjectEdit schema={schema} data={data} />)
        }
        else if (schema.type == 'array') {
            return (<JsonArrayEdit schema={schema} data={data} />)
        }
        return undefined;
    }

    return (
        <div>
            {createForm(props.schema, props.data)}
        </div>
    );
}