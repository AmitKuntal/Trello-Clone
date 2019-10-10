import React from 'react';
export default function card(props){
    console.log(props)
    return (<div className="shadow-lg col-12 p-4 bg-white mb-2 rounded">
                {props.name}
                </div>)
}