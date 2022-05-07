import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import ModalFormAdd from "./ModalForm/ModalFormAdd";
import ModalFormDelete from "./ModalForm/ModalFormDelete";
import ModalFormUpdate from "./ModalForm/ModalFormUpdate";

function MyModal(props) {
  const [action, setAction] = useState(props.action)

  const renderContent = React.useCallback(() => {
    switch(action) {
      case 'add': 
        return <ModalFormAdd closeModal={props.onHide} />;
      
      case 'delete': 
        return <ModalFormDelete nom={props.nom_produit} id_produit={props.id_produit} />
      
      case 'update': 
        return <ModalFormUpdate id_produit={props.id_produit}/>

      default: 
        return null;
      
    }
  }, [action, props.id_produit, props.nom_produit, props.onHide]);

  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal Gestion Produit
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {renderContent()}
      </Modal.Body>
    </Modal>
  );
}

export default MyModal;
