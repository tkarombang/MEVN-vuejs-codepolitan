<script setup>
import { cart, totalCartPrice, totalQuantity, removeFromCart, addToCart } from "../../public/js/CartStore";
</script>

<template>
  <div class="container">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Quantity</th>
          <th scope="col">Product Name</th>
          <th scope="col">Item-Price</th>
          <th scope="col">Prices</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in cart" :key="index.id">
          <th scope="row" class="align-center">
            <button class="btn btn-success btn-sm m-1" @click="addToCart(item.product, 1)">+</button>
            <button class="btn btn-outline-info btn-sm m-1" @click="removeFromCart(item.product, 1)">-</button>
            <span class="m-1">{{ item.qty }}</span>
          </th>
          <td>{{ item.product.name }}</td>
          <td>{{ item.product.price }}</td>
          <td>{{ item.totalPrice }}</td>
        </tr>
        <tr class="table-info">
          <th scope="row">Total Product</th>
          <td class="text-lg-center">
            <strong>{{ totalQuantity }}</strong>
          </td>
          <td class="text-uppercase">
            <strong>Total price</strong>
          </td>
          <td class="text-success">
            <strong>{{ totalCartPrice }}</strong>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
