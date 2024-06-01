<script setup>
import { reactive, ref } from "vue";

import ComponenHeader from "./components/ComponenHeader.vue";
import ComponenData from "./components/ComponenData.vue";
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary p-3">
    <div class="container-fluid justify-content-end">
      <ComponenHeader />
    </div>
  </nav>
  <div class="container-fluid">
    <ComponenData />
  </div>
</template>

<style scoped>
.title {
  color: red;
}
</style>
