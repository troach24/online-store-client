<template>
  <div id="app">
    <nav-bar></nav-bar>
    <router-view
    :inventory="inventory"
    :getInventory="getInventory"
    :cartTable="cartTable"
    :getCartItems="getCartItems"
    class="container"/>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar';

export default {
  components: {
    NavBar,
  },
  data: () => ({
    inventory: Array,
    cartTable: Array,
  }),
  methods: {
    getInventory() {
      fetch(('http://localhost:5000/inventory'), {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Content-Type',
        },
      })
        .then(res => res.json())
        .then((data) => {
          this.inventory = data.inventory;
        });
    },
    getCartItems() {
      fetch(('http://localhost:5000/cart'), {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Content-Type',
        },
      })
        .then(res => res.json())
        .then((data) => {
          this.cartTable = data;
        });
    },
  },
};
</script>

<style>

</style>
