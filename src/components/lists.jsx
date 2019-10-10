import React, { Component } from 'react';
import BoardDetails from './boarddetails';
import List from './list'
class Lists extends Component {
    state = { lists:[],
                boarddetails:null,
            style:{
             } 
    }
    async componentDidMount(){
        let lists = await fetch(`https://api.trello.com/1/${this.props.location.pathname}/lists?cards=none&card_fields=all&filter=open&fields=all&key=3980e9887394ee42fb72d04db7b10450&token=79724cb4f83981a1ac87123d5d199a66a42ba859a1b49529c7d5eeb42609d07f`)
        lists = await lists.json()
        let boarddetails = await fetch(`https://api.trello.com/1/${this.props.location.pathname}?key=3980e9887394ee42fb72d04db7b10450&token=79724cb4f83981a1ac87123d5d199a66a42ba859a1b49529c7d5eeb42609d07f`)
        boarddetails = await boarddetails.json()
        this.setState({
            lists:lists,
            boarddetails:boarddetails,
            style: {
                "backgroundImage": `url(${boarddetails.prefs.backgroundImageScaled[8].url})`,
                "backgroundSize":"cover",
            "backgroundRepeat": "no-repeat",
            }});
        console.log(this.state)
    }

    render() { 
        return (
                <div className='boards col-12' style={this.state.style}>
                {this.state.boarddetails?<BoardDetails {...this.state.boarddetails}/>:"Loading"}  
                <div className='lists d-inline-flex'>
                {!this.state.lists?"Loading":(this.state.lists.map((list)=><List {...list}/>))}
                </div>
                </div>);
    }
}
export default Lists;