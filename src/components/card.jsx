import React from 'react';
export default function card(props){
    return (<div className="shadow-lg col-12 p-2 pl-4 bg-white mb-2 rounded">
                <div className='row'>{props.name}</div>
                <div className='row d-flex inline'>
                {props.desc?<div className='col-1'><img src='./../../description.png' style={{"height":"1vw","width":"1vw","margin":"0"}} alt="description"/></div>:""}
                {props.badges.checkItems?
                  <> <div className='col-1'> <img src='./../../images.png' style={{"height":"1vw","width":"1vw","margin":"0"}} alt="checklist"/></div>
                   <div className='col-1'> <p>{props.badges.checkItemsChecked}/{props.badges.checkItems}</p></div></>:""}
                </div>
            </div>)
}