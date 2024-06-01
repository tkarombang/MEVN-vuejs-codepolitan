<script setup>
import { ref, onMounted } from "vue";
import { cart } from "./js/CartStore";
</script>

<template>
  <button type="button" class="btn btn-success position-relative">
    Cart:
    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
      {{ cart.length }}
      <span class="visually-hidden">unread messages</span>
    </span>
  </button>
</template>
