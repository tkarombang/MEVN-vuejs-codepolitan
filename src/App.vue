<script setup>
import ComponenHeader from "./components/ComponenHeader.vue";
import ComponenData from "./components/ComponenData.vue";
import ComponenSort from "./components/ComponenSort.vue";
import ComponenOffCanvas from "./components/ComponenOffCanvas.vue";
</script>
<!-- navbar-expand-lg bg-dark border-bottom border-body p-3 sticky-top -->
<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
    <div class="container">
      <ComponenHeader />
    </div>
  </nav>
  <main>
    <RouterView />
  </main>
  <!-- OffCanvas -->
  <ComponenOffCanvas />
</template>

<style scoped>
.title {
  color: red;
}
</style>
