<script setup>
import { ref, onMounted } from "vue";
import { addToCart } from "./js/CartStore";

const maxPrice = ref(null);
let products = ref(null);
onMounted(() => {
  fetch("https://hplussport.com/api/products/oder/price")
    .then((response) => response.json())
    .then((data) => {
      products.value = data;
    });
});
// export const cart = ref([]);
</script>
<template>
  <div class="container">
    <div class="mb-3">
      <!-- <p>{{ cart.length }}</p> -->
      <label class="form-label">Price of the Products</label>
      <input type="number" class="form-control" v-model="maxPrice" />
      <input type="range" class="form-range" min="0" max="200" v-model="maxPrice" />
    </div>
    <div v-for="product in products" class="container">
      <div v-if="product.price > maxPrice" class="row justify-content-md-center align-items-center">
        <div class="col-1">
          <button class="btn btn-primary" @click="addToCart(product)">+</button>
        </div>
        <div class="col-md-3">
          <img :src="product.image" alt="" class="img-fluid" />
        </div>
        <div class="col-md-6 mb-3">
          <h2>{{ product.name }}</h2>
          <p>{{ product.description }}</p>
          <div class="h5 float-sm-end">${{ product.price }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
