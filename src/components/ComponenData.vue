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
    <transition name="fade" enter-active-class="animate__animated animate__flipInX" leave-to-class="animate__flipOutX">
      <div v-if="style.sliderStatus">
        <div class="mb-3 d-flex align-items-center" :class="sliderState">
          <label :class="style.label">MAX</label>
          <input type="number" class="form-control mx-2 h-25 m-2" :style="{ width: style.inputWidth + 'px', 'text-align': 'center' }" :value="maxPrice" min="0" max="100" @input="updateMaxPrice" />
          <input type="range" class="form-range" :value="maxPrice" min="0" max="100" @input="updateMaxPrice" />
        </div>
      </div>
    </transition>
    <transition-group name="fade" tag="div">
      <div v-for="(product, index) in products" :key="product.id" class="container">
        <TransitionGroup name="fade" tag="div" enter-active-class="animate__animated animate__fadeInLeft" leave-from-class="animate__animated animate__slideOutRight animate__delay-2s">
          <div v-if="product.price >= maxPrice" class="row justify-content-md-center align-items-center mt-2" :data-index="index">
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
        </TransitionGroup>
      </div>
    </transition-group>
  </div>
</template>
