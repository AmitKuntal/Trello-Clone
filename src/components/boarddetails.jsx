import React, { Component } from 'react';
import Modal from './modal'
class BoardDetails extends Component {
    state = { modal:false,listName:"",toggle:this.toggle,add:this.props.addList}
    toggle = ()=> {
        this.setState({
          modal: !this.state.modal
        });
      }
    render() { 
        return ( <nav className="d-flex justify-content-start bg-transparent navbar ">
        <button className="btn btn-outline-danger bg-transparent text-dark font-weight-bold " >{this.props.boarddetails.name}</button>
        <button className="btn btn-outline-danger bg-transparent text-dark font-weight-bold ml-2">{this.props.boarddetails.prefs.permissionLevel?this.props.boarddetails.prefs.permissionLevel:"Member"}</button>
        <button type="button" className="btn btn-outline-danger bg-transparent text-white font-weight-bold" onClick={this.toggle}>+</button>
        {this.state.modal?<Modal {...this.state} name="List"/>:""}
   </nav> );
    }
}
 
export default BoardDetails;
