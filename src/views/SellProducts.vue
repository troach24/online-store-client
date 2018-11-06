<template>
  <div class="container">
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><a href="/#/inventory/buy">Buy</a></li>
      <li class="breadcrumb-item active">Sell</li>
    </ol>
    <div class="container">
      <h1 class="display-3">SELL YOUR STUFF!</h1>
      <p class="lead">You have {{ inventory.length }} item(s) up for sale at this time.</p>
      <p class="lead">
        <a class="btn btn-primary btn-lg" href="/#/inventory/add-item" role="button">Add Item</a>
      </p>
      <hr class="my-4">
      <ul>
        <div v-if="loading" class="load">
          <img
            src="https://talk.openmrs.org/uploads/default/original/2X/d/debba174801e7dac4f8006280b72ae8b0c5bb36d.gif"
            alt="loading items...">
          <p class="lead">Loading Inventory Items...</p>
        </div>
        <InventoryItem
          v-else
          :getInventory="getInventory"
          v-for="item in inventory"
          :item="item"
          :key="item.id"
        />
      </ul>
    </div>
  </div>
</template>

<script>
import InventoryItem from '@/components/InventoryItem';

export default {
  name: 'Sell',
  props: ['getInventory', 'inventory', 'loading'],
  components: {
    InventoryItem,
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
  .load {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
