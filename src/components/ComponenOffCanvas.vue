<script setup>
import { cart, removeFromCart, totalCartPrice } from "../../public/js/CartStore";
</script>
<template>
  <div class="offcanvas offcanvas-end" data-bs-theme="dark" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
    <div class="offcanvas-header">
      <div v-if="cart.length == 0">
        <h5 class="offcanvas-title" id="offcanvasRightLabel">{{ cartTitle }}</h5>
      </div>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body" style="font-size: smaller">
      <div v-for="(item, index) in cart" :key="index.id" :data-index="index" class="cart-item">
        <div class="text-nowrap text-right">
          <span class="badge rounded-pill text-bg-warning align-text-top mr-1">{{ item.qty }} </span>
          <span class="fw-light m-1">{{ item.product.name }}</span>
          <b>${{ item.totalPrice }}</b>
          <button @click="removeFromCart(item.product, 1)" type="button" class="btn btn-sm btn-outline-info m-1">Delete</button>
        </div>
      </div>
      <b>Total Price : {{ totalCartPrice }}</b>
    </div>
  </div>
</template>
