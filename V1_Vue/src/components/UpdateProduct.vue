<template>
  <div class="edit-form">
    <h4>Product</h4>
    <form>
      <div class="form-group">
        <label for="title">Title</label>
        <input
          type="text"
          class="form-control"
          id="title"
          v-model="currentProduct.nom"
        />
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <input
          type="text"
          class="form-control"
          id="description"
          v-model="currentProduct.description"
        />
      </div>
        <div class="form-group">
        <label for="prix">Prix</label>
        <input
          type="text"
          class="form-control"
          id="prix"
          v-model="currentProduct.prix"
        />
      </div>
    </form>

    <button type="submit" class="btn btn-primary" @click="updateProduct">
      Update
    </button>
    <p>{{ message }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ProductDataService from "../services/ProductDataService";
import Product from "../types/Product";

@Component
export default class ProductDetails extends Vue {
  private currentProduct = {} as Product;
  private message: string = "";
  $route: any;

  getProduct(id: string) {
    ProductDataService.get(id)
      .then((response) => {
        this.currentProduct = response.data;
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  updateProduct() {
    var data = {
      data: {
        id_produit: this.currentProduct.id_produit,
        nom: this.currentProduct.nom,
        description: this.currentProduct.description,
        prix: this.currentProduct.prix,
      },
    }    
    
    ProductDataService.update(data)
      .then((response) => {
        console.log(response.data);
        this.message = "The Product was updated successfully!";
      })
      .catch((e) => {
        console.log(e);
      });
  }

  mounted() {
    this.message = "";
    this.getProduct(this.$route.params.id);
  }
}
</script>

<style scoped>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>
