import React, { Component } from 'react';
import Board from './board'
class Boards extends Component {
    state = { boards:[] }
   async componentDidMount(){
        let boards = await fetch('https://api.trello.com/1/members/amitkuntal1/boards?filter=all&fields=all&lists=none&memberships=none&organization=false&organization_fields=name%2CdisplayName&key=${key}&token=${token}')
        boards = await boards.json()
        this.setState({boards:boards})
    }
    render() { 
        return ( <div className="boards d-flex justify-content-around  mt-5">
        {!this.state.boards ?"loading" :this.state.boards.map((board)=><Board {...board} key={board.id}/>)} 
        </div>);
    }
}
 
export default Boards;