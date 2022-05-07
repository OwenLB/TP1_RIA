<template>
  <div class="list row">
    <div class="col-md-6">
      <h4>Products List</h4>
      <ul class="list-group">
        <li
          class="list-group-item"
          v-for="(product, index) in products"
          :key="index"
        >
          <h5>{{ product.nom }} - {{ product.prix }}€</h5>
          {{ product.description }}<br>
          <button class="btn btn-danger" @click="deleteProduct(product)">
            Delete
          </button>
          <button class="btn btn-primary" @click="updateProduct(product)">
            Edit
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ProductDataService from "../services/ProductDataService";
import Product from "../types/Product";

@Component
export default class ProductsList extends Vue {
  private products: Product[] = [];
  private currentProduct = {} as Product;

  retrieveProducts() {
    ProductDataService.getAll()
      .then((response) => {
        this.products = response.data;
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  updateProduct(product: Product) {
    console.log(product);
    window.location.href = '/products/' + product.id_produit;

   
  }

  deleteProduct(product: Product) {    
    var id = {
      data : {
        id_produit: product.id_produit,
      }
    }
    ProductDataService.delete(id)
      .then((response) => {
        console.log(response.data);
        this.retrieveProducts();
      })
      .catch((e) => {
        console.log(e);
      });
  }

  refreshList() {
    this.retrieveProducts();
  }

  mounted() {
    this.retrieveProducts();
  }
}
</script>

<style scoped>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
</style>
