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
    <Footer />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar';
import API from './API';

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
    // Retrieve full inventory from database
    getInventory() {
      fetch((`${API.API_URL}/inventory`), {
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
    // Retrieve current cart data from database
    getCartItems() {
      fetch((`${API.API_URL}/cart`), {
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
    // Retreive data object to update a specific inventory item, pass to child component
    getItemById(route) {
      fetch((`${API.API_URL}/inventory/${route}`), {
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
