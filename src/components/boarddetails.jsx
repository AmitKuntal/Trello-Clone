import React from 'react';
export default function BoardDetails(props){
    return(<nav className="d-flex justify-content-start bg-transparent navbar ">
     <button className="btn btn-outline-danger bg-transparent text-dark font-weight-bold " >{props.name}</button>
     <button className="btn btn-outline-danger bg-transparent text-dark font-weight-bold ml-2">{props.prefs.permissionLevel?props.prefs.permissionLevel:"Member"}</button>
     <button className="btn btn-outline-danger bg-transparent text-white font-weight-bold">+</button>

</nav>)
}