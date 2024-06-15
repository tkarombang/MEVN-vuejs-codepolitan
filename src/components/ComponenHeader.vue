<script setup>
import { cart } from "../../public/js/CartStore";
import "bootstrap-icons/font/bootstrap-icons.css";
</script>

<template>
  <a class="navbar-brand" href="#">Shopping List</a>
  <button type="button" class="btn btn-success btn-sm position-relative" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
    <i class="bi bi-cart"></i> <b>Cart:</b>
    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
      {{ cart.length }}
      <span class="visually-hidden">unread messages</span>
    </span>
  </button>
</template>
