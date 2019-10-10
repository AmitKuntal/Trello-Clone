import React, { Component } from 'react';
import Cards from './cards'
class List extends Component {
    state = { style:{"height":"fit-content"},
                cardsDetail :[],
            showCards:false }
    async componentDidMount(){
        let allcards = await fetch(`https://api.trello.com/1/lists/${this.props.id}/cards?key=3980e9887394ee42fb72d04db7b10450&token=79724cb4f83981a1ac87123d5d199a66a42ba859a1b49529c7d5eeb42609d07f `)
        allcards = await allcards.json()
        this.setState({cardsDetail:allcards})
        if(this.state.cardsDetail.length >=1){
            this.setState({showCards:true})
        }
    }
    render() { 
        console.log(this.state)
        return (  <div className="col-3 p-2 bg-light rounded mr-3" style={this.state.style} >
                    <div className="row">
                    <div className="col-9 text-gray p-2 ml-1">
                        {this.props.name}
                    </div>
                    <div className="col-2">
                        ...
                    </div>
                    </div>
                    {this.state.showCards?<Cards cards={this.state.cardsDetail}/>:""}
                    <div className="row">
                    <div className="col-2 text-gray">
                    +
                    </div>
                    <div className="col-9">
                    Add another card
                    </div>
                    </div>
                </div>   );
    }
}
 
export default List;