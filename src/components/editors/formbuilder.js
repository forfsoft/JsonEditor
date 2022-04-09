import * as React from 'react';
import JsonNumberEdit from './number'
import JsonStringEdit from './string'
import JsonObjectEdit from './object'
import JsonArrayEdit from './array'
  
export default function JsonFormBuilder(props) {

    function createForm(index, schema, data) {
        // var alias = schema.type + "_" + schema.title + "_" + index
        // console.log('create form:', schema, alias)
        if (schema.type === 'number') {
            return (<JsonNumberEdit index={index} schema={schema} data={data} />)
        }
        else if (schema.type === 'string') {
            return (<JsonStringEdit index={index} schema={schema} data={data} />)
        }
        else if (schema.type === 'object') {
            return (<JsonObjectEdit index={index} schema={schema} data={data} />)
        }
        else if (schema.type === 'array') {
            return (<JsonArrayEdit schema={schema} data={data} />)
        }
        return undefined;
    }

    return (
        <div>
            {createForm(props.index, props.schema, props.data)}
        </div>
    );
}