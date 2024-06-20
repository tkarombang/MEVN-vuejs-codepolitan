<script setup>
import { style, sliderState, maxPrice } from "../../public/js/CartStore";

const updateMaxPrice = (event) => {
  maxPrice.value = Number(event.target.value);
};
</script>
<template>
  <div v-if="style.sliderStatus">
    <div class="mb-3 d-flex align-items-center" :class="sliderState">
      <label :class="style.label">MAX</label>
      <input type="number" class="form-control mx-2 h-25 m-2" :style="{ width: style.inputWidth + 'px', 'text-align': 'center' }" :value="maxPrice" min="0" max="100" @input="updateMaxPrice" />
      <input type="range" class="form-range" :value="maxPrice" min="0" max="100" @input="updateMaxPrice" />
    </div>
  </div>
</template>
