<script setup>
import { onMounted } from "vue";
import { addToCart, products, maxPrice } from "../../public/js/CartStore";
import ComponeSlider from "../components/ComponenSlider.vue";

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
    <transition name="fade" enter-active-class="animate__animated animate__flipInX" leave-to-class="animate__flipOutX">
      <ComponeSlider />
    </transition>
    <transition-group name="fade" tag="div">
      <div v-for="(product, index) in products" :key="product.id" class="container">
        <TransitionGroup name="fade" tag="div" enter-active-class="animate__animated animate__fadeInLeft" leave-from-class="animate__animated animate__slideOutRight animate__delay-2s">
          <div v-if="product.price >= maxPrice" class="row justify-content-md-center align-items-center mt-2" :data-index="index">
            <div class="col-1">
              <button class="btn btn-primary" @click="addToCart(product, 1)">+</button>
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
