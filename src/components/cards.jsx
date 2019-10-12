import React from 'react';
import Card from './card'
export default function(props){
    return (<div className="cards p-1">
            {props.cards?props.cards.map((card)=><Card {...card} key={card.id} delete={props.delete}/>):""}
            </div>

    )
}