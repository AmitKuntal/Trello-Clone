import React, { Component } from "react";
import BoardDetails from "./boarddetails";
import List from "./list";
class Lists extends Component {
  state = { lists: [], boarddetails: null, style: {}, addList: this.addList,archiveList:this.archiveList };
  async componentDidMount() {
    let lists = await fetch(
      `https://api.trello.com/1/${this.props.location.pathname}/lists?cards=none&card_fields=all&filter=open&fields=all&key=3980e9887394ee42fb72d04db7b10450&token=9691da586bb59c0372503e3cd2a1718a551baac861486bf455d3fbff0452a3b1`
    );
    lists = await lists.json();
    let boarddetails = await fetch(
      `https://api.trello.com/1/${this.props.location.pathname}?key=3980e9887394ee42fb72d04db7b10450&token=9691da586bb59c0372503e3cd2a1718a551baac861486bf455d3fbff0452a3b1`
    );
    boarddetails = await boarddetails.json();
    this.setState({
      lists: lists,
      boarddetails: boarddetails,
      style: {
        backgroundImage: `url(${boarddetails.prefs.backgroundImageScaled[8].url})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
      },addList:this.addList,archiveList:this.archiveList
    });
  }


  addList = (name) => {
    fetch(`https://api.trello.com/1/lists?name=${name}&idBoard=${this.state.boarddetails.id}&key=3980e9887394ee42fb72d04db7b10450&token=9691da586bb59c0372503e3cd2a1718a551baac861486bf455d3fbff0452a3b1`,{method:"POST"})
    .then((res)=>res.json())
    .then((res)=>{
        let lists = this.state.lists;
        lists.push(res)
        this.setState({lists:lists})
    })
    
  };
  archiveList = (id) =>{
      fetch(`https://api.trello.com/1/lists/${id}/closed?value=true&key=3980e9887394ee42fb72d04db7b10450&token=9691da586bb59c0372503e3cd2a1718a551baac861486bf455d3fbff0452a3b1`,{method:"PUT"})
      .then((res)=>res.json())
      .then((res)=>{
         let newLists = this.state.lists.filter((list)=>list.id !== id)
         this.setState({lists:newLists})
      }).catch((err)=>alert(err))
  }
  render() {
    return (
      <div className="boards col-12" style={this.state.style}>
        {this.state.boarddetails ? <BoardDetails {...this.state} /> : "Loading"}
        <div className="lists d-inline-flex">
          {!this.state.lists
            ? "Loading"
            : this.state.lists.map(list => <List {...list} key={list.id} archiveList={this.archiveList} />)}
        </div>
      </div>
    );
  }
}
export default Lists;
