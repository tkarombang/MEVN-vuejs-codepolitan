import { ref, reactive, computed } from "vue";

const cart = ref([]);
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

// export function addToCart(product) {
//   return cart.value.push(product);
// }

const addToCart = (product, qty = 1) => {
  console.log(cart.value);
  console.log(product.id);

  const itemIndex = cart.value.findIndex((item) => item.product.id === product.id);
  if (itemIndex !== -1) {
    cart.value[itemIndex].qty += qty;
  } else {
    cart.value.push({ product, qty });
  }
  console.log(itemIndex);

  // const itemIndex = cart.value.findIndex((item) => item.product.id === product.id);
  // if (itemIndex !== -1) {
  //   cart.value[itemIndex].qty += qty;
  // } else {
  //   cart.value.push({ product, qty });
  // }
};

export { addToCart, cart };
