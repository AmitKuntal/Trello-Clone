import React from 'react';
import Card from './card'
export default function(props){
    console.log(props)
    return (<div className="cards">
            {props.cards?props.cards.map((card)=><Card {...card}/>):""}
            </div>

    )
}