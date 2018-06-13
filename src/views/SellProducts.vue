<template>
  <div>
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><a href="/#/buy">Buy</a></li>
      <li class="breadcrumb-item active">Sell</li>
    </ol>
    <div class="container">
      <h1 class="display-3">SELL STUFF!</h1>
      <p class="lead">Add an item or view what you have posted for sale.</p>
      <p class="lead">
        <a class="btn btn-primary btn-lg" href="/#/add-item" role="button">Add Item</a>
      </p>
      <hr class="my-4">
      <ul>
        <Item v-for="inventoryItem in inventory"
        :inventoryItem="inventoryItem"
        :key="inventoryItem.id" />
      </ul>
    </div>
  </div>
</template>

<script>
import Item from '@/components/Item';

export default {
  name: 'Sell',
  props: ['getInventory', 'inventory'],
  components: {
    Item,
  },
  beforeMount() {
    this.getInventory();
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

