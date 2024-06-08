<script setup>
import { ref, onMounted } from "vue";
import { addToCart, style, sliderState } from "../../public/js/CartStore";

const maxPrice = ref(0);
const updateMaxPrice = (event) => {
  maxPrice.value = Number(event.target.value);
  console.log(maxPrice.value);
};
let products = ref(null);
onMounted(() => {
  fetch("https://hplussport.com/api/products/oder/price")
    .then((response) => response.json())
    .then((data) => {
      products.value = data;
    });
});
</script>
<template>
  <div class="container">
    <button class="btn btn-primary mt-2" @click="style.sliderStatus = !style.sliderStatus"><i class="bi bi-currency-dollar"></i></button><b><== range the price</b>
    <!-- <transition name="fade"> -->
    <div class="mb-3 d-flex align-items-center" :class="sliderState">
      <label :class="style.label">MAX</label>
      <input type="number" class="form-control mx-2 h-25 m-2" :style="{ width: style.inputWidth + 'px', 'text-align': 'center' }" :value="maxPrice" min="0" max="100" @input="updateMaxPrice" />
      <input type="range" class="form-range" :value="maxPrice" min="0" max="100" @input="updateMaxPrice" />
    </div>
    <!-- </transition> -->
    <div v-for="product in products" class="container">
      <div v-if="product.price > maxPrice" class="row justify-content-md-center align-items-center mt-2">
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
