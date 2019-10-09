import React from 'react';
export default function board(props){
    return (
    <a className="shadow-lg rounded card cardSize" href={"/boards/"+props.id  }>
    <img className="card-img-top" src={props.prefs.backgroundImageScaled?props.prefs.backgroundImageScaled[3].url:"https://picsum.photos/id/866/67/100"} alt="Card Background cap"/>
    <div className="card-img-overlay">
      <h5 className="card-title text-white">{props.name}</h5>
       </div>
  </a>)
}