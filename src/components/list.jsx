import React, { Component } from "react";
import Modal from "./modal";
import Cards from "./cards";
class List extends Component {
  state = {
    style: { height: "fit-content" },
    cardsDetail: [],
    showCards: false,
    modals: false
  };

  handleArchive = () => {
    this.props.archiveList(this.props.id);
  };

  async componentDidMount() {
    let allcards = await fetch(
      `https://api.trello.com/1/lists/${this.props.id}/cards?key=3980e9887394ee42fb72d04db7b10450&token=9691da586bb59c0372503e3cd2a1718a551baac861486bf455d3fbff0452a3b1 `
    );
    allcards = await allcards.json();
    this.setState({ cardsDetail: allcards });
    if (this.state.cardsDetail.length >= 1) {
      this.setState({ showCards: true });
    }
  }
  addCard = name => {
    fetch(
      `https://api.trello.com/1/cards?name=${name}&idList=${this.props.id}&keepFromSource=all&key=3980e9887394ee42fb72d04db7b10450&token=9691da586bb59c0372503e3cd2a1718a551baac861486bf455d3fbff0452a3b1`,
      { method: "POST" }
    )
      .then(res => res.json())
      .then(res => {
        let allcards = this.state.cardsDetail;
        allcards.push(res);
        this.setState({ cardsDetail: allcards });
      });
  };
  deleteCard = (id)=>{
      fetch(`https://api.trello.com/1/cards/${id}?key=3980e9887394ee42fb72d04db7b10450&token=9691da586bb59c0372503e3cd2a1718a551baac861486bf455d3fbff0452a3b1`,{method:"DELETE"})
        .then((res)=>{
            let newcards= this.state.cardsDetail.filter((card)=> card.id !== id)
            this.setState({cardsDetail:newcards})
        }).catch((err)=>alert(err))
  }
  activateModel = () => {
    this.setState({ modals: !this.state.modals });
  };

  render() {
    return (
      <div className="col-md-3 p-3 bg-light rounded mr-3" style={this.state.style}>
        <div className="row">
          <div className="col-9 text-gray p-2 ml-1">{this.props.name}</div>
          <div className="col-2">
            <button type="button" className="btn bg-light" onClick={this.handleArchive}>
              {" "}
              X
            </button>
          </div>
        </div><>
        {this.state.showCards ? <Cards cards={this.state.cardsDetail} delete={this.deleteCard} /> : ""}</>
        <div className="row">
          <button type="button" className="btn bg-light col-9" onClick={this.activateModel}>
            + Add another card
          </button>
          {this.state.modals ? (
            <Modal {...this.state} name="Card" add={this.addCard} />
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}

export default List;
