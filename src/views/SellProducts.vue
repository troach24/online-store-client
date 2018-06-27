<template>
  <div class="container">
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><a href="/#/inventory/buy">Buy</a></li>
      <li class="breadcrumb-item active">Sell</li>
    </ol>
    <div class="container">
      <h1 class="display-3">SELL STUFF!</h1>
      <p class="lead">Add an item or view what you have posted for sale.</p>
      <p class="lead">
        <a class="btn btn-primary btn-lg" href="/#/inventory/add-item" role="button">Add Item</a>
      </p>
      <hr class="my-4">
      <ul>
        <InventoryItem v-for="item in inventory"
        :item="item"
        :computedProperty="computedProperty"
        :deleteItem="deleteItem"
        :key="item.id" />
      </ul>
    </div>
  </div>
</template>

<script>
import API from '@/API.js';
import InventoryItem from '@/components/InventoryItem';

export default {
  name: 'Sell',
  props: ['inventory'],
  components: {
    InventoryItem,
  },
  methods: {
    async deleteItem(obj) {
      try {
        const res = await fetch((`http://localhost:5000/inventory/${obj.id}`), {
        method: 'DELETE',
        body: JSON.stringify(this.obj),
        headers: {
          'content-type': 'application/json',
          mode: 'cors',
          cache: 'default',
        },
      });
      API.getInventory();
      return true;
    } catch (error) {
      error.message = 'error';
      return error.message;
    }
  },
      
    //   .then((res) => {
    //     if (res.status === 500) {
    //       this.errorMessage = 'Something went wrong. Please try again';
    //       throw new Error(this.errorMessage);
    //       return false;
    //     }
    //     // this.setResponseMsg();
    //     // this.computedProperty();
    //     // await API.getInventory();
    //     return true;
    //   }).then((success) => {
    //     if (!success) { return };
    //   });
    // },
  },
  computed: {
    computedProperty() {
      return this.inventory;
    },
  },
  watch: {
    computedProperty() {
      return this.inventory;
    },
  },
};
</script>

<style scoped>
  ul {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    padding: 0;
    margin-top: 20px;
  }
</style>

