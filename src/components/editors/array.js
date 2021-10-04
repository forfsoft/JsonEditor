import * as React from 'react';
import JsonFormBuilder from './formbuilder'

export default function JsonArrayEdit(props) {
    function loopBuild(schema, data) {
        console.log('array loop count:' + schema.maxItems)
        var components = [];
        if (schema.maxItems == undefined || schema.maxItems == 0) {
            components.push(<JsonFormBuilder schema={schema.items} data={data} />)
        } else {
            for (var i = 0; i < schema.maxItems; i++) {
                components.push(<JsonFormBuilder schema={schema.items} data={data} index={i} />)
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