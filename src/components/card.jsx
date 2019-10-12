import React, { Component } from 'react';
import Modal  from './checkListModal'
class Card extends Component {
  state = { cardId:this.props.id,
            cardName:this.props.name,
            cardDescription:this.props.desc,
            modal:false }
  deleteHandle = ()=>{
    this.props.delete(this.props.id)
  }
  handleModal=()=>{
    this.setState({modal:!this.state.modal})
  }
  render() { 
    return ( <div className="shadow-lg col-12 p-2 pl-4 bg-white mb-2 rounded" onClick={this.handleModal}>
    <div className="row">
      <div className="col-9">  <div className='row'>{this.props.name}</div>
        <div className='row d-flex inline'>
        {this.props.desc?<div className='col-1'><img src='./../../description.png' style={{"height":"1vw","width":"1vw","margin":"0"}} alt="description"/></div>:""}
        {this.props.badges.checkItems?
          <> <div className='col-1'> <img src='./../../images.png' style={{"height":"1vw","width":"1vw","margin":"0"}} alt="checklist"/></div>
           <div className='col-1'> <p>{this.props.badges.checkItemsChecked}/{this.props.badges.checkItems}</p></div></>:""}
        </div>
        </div>
        <div className="col-1">
         <button type="button" className="btn bg-light" onClick={this.deleteHandle}> X</button>
         {this.state.modal?<Modal {...this.state}/>:""}
        </div>
          
    </div>
    </div>
    
    );
  }
}
 
export default Card;
