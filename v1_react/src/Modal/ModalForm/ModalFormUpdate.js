import React, { useState, useEffect } from "react";
import axios from "axios";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Col, Row } from "react-bootstrap";

function ModalFormUpdate(props) {
  const [validated, setValidated] = useState(false);

  const [id_produit, setIdProduit] = useState(props.id_produit);

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
    updateProduct();
  };

  useEffect(() => {
    getProduct(id_produit)
  }, [id_produit])
  

  async function updateProduct() {
    try {
      const response = await axios.post("http://localhost:3036/api/product", {
        data: {
          id_produit: id_produit,
          nom: nom,
          description: description,
          prix: prix,
        },
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  async function getProduct(id_produit) {
    try {
      const response = await axios.get("http://localhost:3036/api/product/" + id_produit);
      let product = response.data
      setNom(product.nom)
      setDescription(product.description)
      setPrix(product.prix)
    } catch (error) {
      console.error(error);
    }
  }

  const handleChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    switch (name) {
      case "nom":
        setNom(value);
        break;
      case "description":
        setDescription(value);
        break;
      case "prix":
        setPrix(value);
        break;
      default:
        break;
    }
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="validationCustom01">
          <Form.Label>Nom</Form.Label>
          <Form.Control
            type="text"
            name="nom"
            placeholder="Nom du produit"
            value={nom}
            onChange={handleChange}
            required
          />
          <Form.Control.Feedback type="invalid">
            Saisissez le nom du produit, s'il vous plait.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="validationCustom02">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            name="description"
            placeholder="Description du produit"
            as="textarea"
            rows={2}
            value={description}
            onChange={handleChange}
            required
          />
          <Form.Control.Feedback type="invalid">
            Saisissez la description du produit, s'il vous plait.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="validationCustom03">
          <Form.Label>Prix</Form.Label>
          <Form.Control
            type="number"
            name="prix"
            placeholder="Prix du produit"
            value={prix}
            onChange={handleChange}
            required
          />
          <Form.Control.Feedback type="invalid">
            Saisissez le prix du produit, s'il vous plait.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <div className="mb-3">
        <Button className="mx-2" type="submit">
          Modifier
        </Button>
        <Button className="mx-2" onClick={props.closeModal}>
          Annuler
        </Button>
      </div>
    </Form>
  );
}

export default ModalFormUpdate;
