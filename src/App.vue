<template>
  <div id="app">
    <nav-bar></nav-bar>
    <router-view
    :inventory="inventory"
    :getInventory="getInventory"
    :cartTable="cartTable.cart"
    :getCartItems="getCartItems"
    :selectedInventoryItem="selectedInventoryItem"
    :getItemById="getItemById"
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
    selectedInventoryItem: Object,
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
    getItemById(route) {
      fetch(('http://localhost:5000/inventory/' + route), {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Content-Type',
        },
      }).then(res => res.json())
        .then((data) => {
          this.selectedInventoryItem = data.inventoryItem;
        });
    },
  },
};
</script>
