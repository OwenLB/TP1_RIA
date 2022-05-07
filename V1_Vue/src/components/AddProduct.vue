<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="nom">Nom</label>
        <input
          type="text"
          class="form-control"
          id="nom"
          required
          v-model="product.nom"
          name="nom "
        />
      </div>

      <div class="form-group">
        <label for="description">Description</label>
        <input
          class="form-control"
          id="description"
          required
          v-model="product.description"
          name="description"
        />
      </div>

      <div class="form-group">
        <label for="description">Prix</label>
        <input
          class="form-control"
          id="prix"
          required
          v-model="product.prix"
          name="prix"
        />
      </div>

      <button @click="saveProduct" class="btn btn-success">Submit</button>
    </div>

    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="newProduct">Add</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ProductDataService from "../services/ProductDataService";
import Product from "../types/Product";

@Component
export default class AddProduct extends Vue {
  private product: Product = {
    id_produit: 0,
    nom: "",
    description: "",
    date_in: new Date(),
    date_up: new Date(),
    prix: 0,
  };

  private submitted: boolean = false;

  saveProduct() {
    let data = {
      data : {
      nom: this.product.nom,
      description: this.product.description,
      prix: this.product.prix,
    }
    };
    console.log(data);
    

    ProductDataService.create(data)
      .then((response) => {
        this.product.id_produit = response.data.id_produit;
        console.log(response.data);
        this.submitted = true;
      })
      .catch((e) => {
        console.log(e);
      });
  }

  newProduct() {
    this.submitted = false;
    this.product = {} as Product;
  }
}
</script>

<style scoped>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>
