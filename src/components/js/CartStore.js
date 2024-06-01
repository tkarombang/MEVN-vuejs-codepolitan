import { ref } from "vue";

export const cart = ref([]);

export function addToCart(product) {
  cart.value.push(product);
}
