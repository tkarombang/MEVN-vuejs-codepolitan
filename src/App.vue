<script setup>
import { reactive, ref } from "vue";

import ComponenHeader from "./components/ComponenHeader.vue";
import ComponenData from "./components/ComponenData.vue";
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-dark border-bottom border-body p-3 sticky-top" data-bs-theme="dark">
    <div class="container-fluid justify-content-around">
      <ComponenHeader />
    </div>
  </nav>
  <div class="container-fluid">
    <ComponenData />
  </div>
  <!-- OffCanvas -->
  <div class="offcanvas offcanvas-end" data-bs-theme="dark" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offcanvasRightLabel">Cart is Empty</h5>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">...</div>
  </div>
</template>

<style scoped>
.title {
  color: red;
}
</style>
