<template>
  <div id="app">
    <nav-bar></nav-bar>
    <!-- :getInventory="getInventory" -->
    <router-view
    :inventory="inventoryData.inventory"
    :cartTable="cartTable.cart"
    :getCartItems="getCartItems"
    :selectedInventoryItem="selectedInventoryItem"
    :getItemById="getItemById"
    class="container"/>
    <Footer />
  </div>
</template>

<script>
import API from '@/API.js';
import NavBar from '@/components/NavBar';

export default {
  components: {
    NavBar,
  },
  data: () => ({
    inventoryData: Array,
    cartTable: Array,
    selectedInventoryItem: Object,
  }),
    async mounted () {
    this.inventoryData = await API.getInventory();
  },
  methods: {
    // getInventory() {
    //   fetch(('http://localhost:5000/inventory'), {
    //     headers: {
    //       'Access-Control-Allow-Origin': '*',
    //       'Access-Control-Allow-Headers': 'Content-Type',
    //     },
    //   })
    //     .then(res => res.json())
    //     .then((data) => {
    //       this.inventory = data.inventory;
    //     });
    // },
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
      fetch((`http://localhost:5000/inventory/${route}`), {
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
