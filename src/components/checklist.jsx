import React from 'react';
import CheckItem from './checkitem'
export default function checklist(props){
    console.log(props)
    return (<div className="col-12">
            <div className="col-12">
                <h5>{props.name}</h5>
            </div>
            <div className="col-12">
                {props.checkItems.map((checkItem)=><CheckItem {...checkItem}/>)}
            </div>
            </div>)
}