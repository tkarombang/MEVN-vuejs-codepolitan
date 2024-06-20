<script setup>
import { ref } from "vue";
import ComponenHeader from "./components/ComponenHeader.vue";
import ComponenData from "./components/ComponenData.vue";
import ComponenSort from "./components/ComponenSort.vue";
import ComponenOffCanvas from "./components/ComponenOffCanvas.vue";

const cartTitle = ref("Cart is Empty");
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-dark border-bottom border-body p-3 sticky-top" data-bs-theme="dark">
    <div class="container-fluid justify-content-around">
      <ComponenHeader />
    </div>
  </nav>
  <div class="container-fluid">
    <ComponenSort />
    <ComponenData />
  </div>
  <!-- OffCanvas -->
  <ComponenOffCanvas />
</template>

<style scoped>
.title {
  color: red;
}
</style>
