<script setup>
import { RouterLink } from "vue-router";
import { totalQuantity } from "../../public/js/CartStore";
import "bootstrap-icons/font/bootstrap-icons.css";
</script>

<template>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item">
        <RouterLink to="/" class="nav-link">About</RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink to="/checkout" class="nav-link">Checkout</RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink to="/product" class="nav-link">Shopping List</RouterLink>
      </li>
    </ul>
  </div>
  <button type="button" class="btn btn-success btn-sm position-relative" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
    <i class="bi bi-cart"></i> <b>Cart:</b>
    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
      {{ totalQuantity }}
      <span class="visually-hidden">unread messages</span>
    </span>
  </button>
</template>
