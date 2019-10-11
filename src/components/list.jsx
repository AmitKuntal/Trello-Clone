import React, { Component } from 'react';
import Cards from './cards'
class List extends Component {
    state = { style:{"height":"fit-content"},
                cardsDetail :[],
            showCards:false }
    async componentDidMount(){
        let allcards = await fetch(`https://api.trello.com/1/lists/${this.props.id}/cards?key=3980e9887394ee42fb72d04db7b10450&token=9691da586bb59c0372503e3cd2a1718a551baac861486bf455d3fbff0452a3b1 `)
        allcards = await allcards.json()
        this.setState({cardsDetail:allcards})
        if(this.state.cardsDetail.length >=1){
            this.setState({showCards:true})
        }
    }
    render() { 
        return (  <div className="col-3 p-3 bg-light rounded mr-3" style={this.state.style} >
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