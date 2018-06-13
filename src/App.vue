<template>
  <div id="app">
    <nav-bar></nav-bar>
    <router-view
    :inventory="inventory"
    :getInventory="getInventory"
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
  }),
  methods: {
    getInventory() {
      fetch(('http://localhost:5000/inventory'), {
      // fetch(('https://marketplace-server-db.herokuapp.com/inventory'), {
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
  },
};
</script>

<style>

</style>
