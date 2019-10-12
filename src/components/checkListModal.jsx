import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Checklist from './checklist'

class AddModal extends Component {
    state = {checklists:[],
                modalState:true}
        toggle = ()=>{
        this.setState({modalState:false})
        }
        componentDidMount(){
             fetch(`https://api.trello.com/1/cards/${this.props.cardId}/checklists?checkItems=all&checkItem_fields=name%2CnameData%2Cpos%2Cstate&filter=all&fields=all&key=${key}&token=${token}`)
            .then((res)=>res.json())
            .then((res)=>{
              this.setState({checklists:res})
            })
          }
  
    render() { 
        return ( <Modal isOpen={this.state.modalState}>
            <div className="col-12 bg-light">
                <div className="row">
                <ModalHeader className="col-10">{this.props.cardName} </ModalHeader>
                <Button color="light" onClick={this.toggle}>X</Button>
                </div>
              <ModalBody>
              <div className="row">
                  <h3>Description</h3>
                  <p>{this.props.cardDescription}</p>
              </div>
              <div className="row checklists">
                  {this.state.checklists?this.state.checklists.map((checklist)=><Checklist {...checklist} key={checklist.id}/>):""}
                </div>
              </ModalBody>
              <ModalFooter>
            </ModalFooter>
              </div>
            </Modal> );
    }
}
 
export default AddModal;
