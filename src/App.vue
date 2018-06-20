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
// import Footer from '@/components/Footer';

export default {
  components: {
    NavBar,
    // Footer,
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

<style>
  #app { 
    /* decide on background img... */

    /* padding-bottom: 70px;
    background-image: url('https://i.pinimg.com/originals/82/b8/63/82b863eae052ae67390ab86a8dd66301.jpg');
    background-position-x: 95%;
    background-position-y: 10%;
    background-repeat: no-repeat;
    background-size: 10%; */
  }
</style>

