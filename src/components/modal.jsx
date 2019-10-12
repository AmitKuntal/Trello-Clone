import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class AddModal extends Component {
    state = { name:"",
                modalState:true}
     handleChangeName = (event)=> {
        this.setState({name :event.target.value})
        }
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.add(this.state.name)
            }
        toggle = ()=>{
        this.setState({modalState:false})
        }
  
    render() { 
        return ( <Modal isOpen={this.state.modalState}>
            <form>
              <ModalHeader>Add new {this.props.name}</ModalHeader>
              <ModalBody>
              <div className="row">
                <div className="form-group col-10">
                <label>{this.props.name} Name:</label>
                <input type="text"  onChange={this.handleChangeName} className="form-control" />
                  </div>
                  </div>  
              </ModalBody>
              <ModalFooter>
                <input type="submit" value="Submit" color="primary" onClick={this.handleSubmit}className="btn btn-primary" />
                <Button color="danger" onClick={this.toggle}>Cancel</Button>
              </ModalFooter>
              </form>
            </Modal> );
    }
}
 
export default AddModal;
