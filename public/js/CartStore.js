import { ref, reactive, computed } from "vue";

export const cart = ref([]);
export let style = reactive({
  label: ["form-label", "w-25", "text-nowrap"],
  // label: ["font-weight-bold", "mr-2"],
  inputWidth: 65,
  sliderStatus: false,
});

//Mengekspose object style ke window global
window.style = style;

export const sliderState = computed(() => {
  return style.sliderStatus ? "d-flex" : "d-none";
});

export function addToCart(product) {
  return cart.value.push(product);
}
