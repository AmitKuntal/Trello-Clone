import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
class BoardDetails extends Component {
    state = { modal:false,listName:"" }
    toggle = ()=> {
        this.setState({
          modal: !this.state.modal
        });
      }
    handleChangeName = (event)=> {
    this.setState({listName: event.target.value});
    }
    handleSubmit = (event) => {
    event.preventDefault();
    this.props.addlist(this.state.listName)
        }
    render() { 
        console.log(this.props)
        return ( <nav className="d-flex justify-content-start bg-transparent navbar ">
        <button className="btn btn-outline-danger bg-transparent text-dark font-weight-bold " >{this.props.boarddetails.name}</button>
        <button className="btn btn-outline-danger bg-transparent text-dark font-weight-bold ml-2">{this.props.boarddetails.prefs.permissionLevel?this.props.boarddetails.prefs.permissionLevel:"Member"}</button>
        <button type="button" className="btn btn-outline-danger bg-transparent text-white font-weight-bold" onClick={this.toggle}>+</button>
        <Modal isOpen={this.state.modal}>
        <form onSubmit={this.handleSubmit}>
          <ModalHeader>Add new List</ModalHeader>
          <ModalBody>
          <div className="row">
            <div className="form-group col-10">
            <label>List Name:</label>
            <input type="text" value={this.state.listName} onChange={this.handleChangeName} className="form-control" />
              </div>
              </div>  
          </ModalBody>
          <ModalFooter>
            <input type="submit" value="Submit" color="primary" className="btn btn-primary" />
            <Button color="danger" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
          </form>
        </Modal>
   </nav> );
    }
}
 
export default BoardDetails;
