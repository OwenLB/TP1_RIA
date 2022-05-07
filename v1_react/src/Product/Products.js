import React from "react";
import { Row, Button } from "react-bootstrap";
import MyModal from "../Modal/MyModal";
import Product from "./Product";
const axios = require("axios");

export default class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      products: [],
      modalShow: false,
    };
  }

  componentDidMount() {
    this.getProducts();
  }

  async getProducts() {
    try {
      const response = await axios.get("http://localhost:3036/api/product");
      this.setState({
        isLoaded: true,
        products: response.data,
      });
    } catch (error) {
      this.setState({
        isLoaded: true,
        error: error,
      });
    }
  }

  handleModal(e) {
    this.setState(({ modalShow }) => ({ modalShow: !modalShow }));
  }

  render() {
    const { error, isLoaded, products } = this.state;
    if (error) {
      return <div>Erreur : {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Chargement…</div>;
    } else {
      return (
        <>
          <Row>
            {products.map((product, index) => (
              <Product
                key={index}
                id_produit={product.id_produit}
                nom={product.nom}
                description={product.description}
                prix={product.prix}
              />
            ))}
            <Button
              className="m-3"
              variant="primary"
              size="lg"
              onClick={(e) => this.handleModal(e)}
            >
              ✚
            </Button>
          </Row>
          <MyModal
            action="add"
            show={this.state.modalShow}
            onHide={(e) => this.handleModal(e)}
          />
        </>
      );
    }
  }
}
