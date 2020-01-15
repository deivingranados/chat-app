import React, { Component } from 'react';
import { Button,Modal } from 'react-bootstrap';


class  ModalComponent extends Component{
    constructor(props) {  
        super(props);
        console.log(props)
         this.state = {
            dataprops:this.props.dataprops
          } 
      } 


    handleCloseDelete = () => {
        this.props.alertClose()
   }

 render(){
        return(
            <div>
            <Modal  show={true} onHide={this.handleClose}>
               <Modal.Header>
                  </Modal.Header>
                     <Modal.Body>
                         <div className="body-modla">
                            <img width={200} height={200} src={this.state.dataprops.urlImage}
                            />
                         </div>
                     </Modal.Body>
                         <Modal.Body><p className="text-infor-modal">{this.state.dataprops.descripcion}</p></Modal.Body>
                         <Modal.Footer>
                        <Button variant="secondary" onClick={()=>this.handleCloseDelete()}>ok</Button>
                     </Modal.Footer>
                </Modal>
         </div>
        )
    }
}
export default ModalComponent
 