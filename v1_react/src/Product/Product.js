import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import MyModal from "../Modal/MyModal";

export default function Product(props) {
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [showModalUpdate, setShowModalUpdate] = useState(false);

  return (
    <React.Fragment>
      <Card className="m-2" style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{props.nom}</Card.Title>
          <Card.Text>
            <b>Description :</b> {props.description}
          </Card.Text>
          <Card.Text>
            <b>Prix :</b> {props.prix} €
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button 
            className="mx-3" 
            variant="primary"
            onClick={() => setShowModalUpdate(true)}
          >
            Modifier
          </Button>
          <Button
            className=""
            variant="danger"
            onClick={() => setShowModalDelete(true)}
          >
            Supprimer
          </Button>
        </Card.Footer>
      </Card>
      <MyModal
        action="delete"
        id_produit={props.id_produit}
        nom_produit={props.nom}
        show={showModalDelete}
        onHide={() => setShowModalDelete(false)}
      />
      <MyModal
        action="update"
        id_produit={props.id_produit}
        show={showModalUpdate}
        onHide={() => setShowModalUpdate(false)}
      />
    </React.Fragment>
  );
}
