import React, { useState } from "react";
import axios from "axios";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Col, Row } from "react-bootstrap";

function ModalFormDelete(props) {
  const [validated, setValidated] = useState(false);

  const [nom, setNom] = useState("");

  const [description, setDescription] = useState("");

  const [prix, setPrix] = useState(0);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
    deleteProduct();
  };

  async function deleteProduct() {
    try {
      const response = await axios.delete("http://localhost:3036/api/product", {
        data : { 
          id_produit: props.id_produit
        }
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <p>Supprimer le produit <strong>{props.nom}</strong> n°{props.id_produit}</p>
      </Row>
      <div className="mb-3">
        <Button variant="primary" className="mx-2" type="submit">
          Supprimer
        </Button>
        <Button variant="primary" className="mx-2" onClick={props.closeModal}>
          Annuler
        </Button>
      </div>
    </Form>
  );
}

export default ModalFormDelete;
