import { createRouter, createWebHistory } from "vue-router";
import About from "@/components/About.vue";
import ComponenCheckout from "@/components/ComponenCheckout.vue";
import Product from "@/components/Product.vue";
const routes = [
  { path: "/", component: About },
  { path: "/checkout", component: ComponenCheckout },
  { path: "/product", component: Product },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
