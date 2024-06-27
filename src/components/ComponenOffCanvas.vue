<script setup>
import { RouterLink, useRouter } from "vue-router";
import { ref, computed, onMounted } from "vue";
import { cart, removeFromCart, totalCartPrice } from "../../public/js/CartStore";
const cartTitle = ref("Cart is Empty");

const offcanvasElement = ref(null);
const router = useRouter();
let offcanvasInstance = null;
onMounted(() => {
  offcanvasInstance = new bootstrap.Offcanvas(offcanvasElement.value);
});
const checkout = () => {
  offcanvasInstance.hide();
  offcanvasElement.value.addEventListener(
    "hidden.bs.offcanvas",
    () => {
      router.push("/checkout");
    },
    { once: true },
  );
};
</script>
<template>
  <div ref="offcanvasElement" class="offcanvas offcanvas-end" data-bs-theme="dark" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
    <div class="offcanvas-header">
      <div v-if="cart.length == 0">
        <h5 class="offcanvas-title" id="offcanvasRightLabel">{{ cartTitle }}</h5>
      </div>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body" style="font-size: smaller">
      <div v-for="(item, index) in cart" :key="index.id" :data-index="index" class="cart-item">
        <div class="d-flex align-items-center justify-content-between">
          <span class="badge rounded-pill text-bg-warning">{{ item.qty }} </span>
          <span class="fw-light m-1 flex-grow-1 text-start">{{ item.product.name }}</span>
          <b class="m-2 text-end">${{ item.totalPrice }}</b>
          <button @click="removeFromCart(item.product, 1)" type="button" class="btn btn-sm btn-outline-info m-1">Delete</button>
        </div>
      </div>
    </div>
    <div class="offcanvas-footer d-flex align-items-center justify-content-md-evenly mb-3">
      <b>Total Price : {{ totalCartPrice }}</b>
      <!-- <RouterLink to="/checkout" class="btn btn-sm btn-outline-light"> Proses Checkout! </RouterLink> -->
      <button @click="checkout" class="btn btn-sm btn-outline-light">Proses Checkout!</button>
    </div>
  </div>
</template>
