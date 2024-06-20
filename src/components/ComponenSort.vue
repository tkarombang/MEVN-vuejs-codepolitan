<script setup>
import { style, products } from "../../public/js/CartStore";

const sortPriceAscending = () => {
  products.value.sort((a, b) => a.price - b.price);
};

const sortPriceDescending = () => {
  products.value.sort((a, b) => b.price - a.price);
};
</script>

<template>
  <div class="container">
    <button class="btn btn-primary m-2" @click="style.sliderStatus = !style.sliderStatus"><i class="bi bi-currency-dollar"></i></button><b><i class="bi bi-arrow-left"></i> SLIDER PRICE</b>
    <button @click="sortPriceAscending" class="btn btn-success m-2">Sort Price Ascending</button>
    <button @click="sortPriceDescending" class="btn btn-danger m-2">Sort Price Descending</button>
  </div>
</template>
