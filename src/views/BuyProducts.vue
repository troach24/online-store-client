<template>
  <div>
    <ol class="breadcrumb">
      <li class="breadcrumb-item active">Buy</li>
      <li class="breadcrumb-item"><a href="/#/inventory/sell">Sell</a></li>
    </ol>
    <div class="container">
      <h1 class="display-3">FOR SALE</h1>
      <p class="lead">
        There are {{ inventory.length }} item(s) available for purchase at this time.
      </p>
      <hr class="my-4">
      <ul class="item-ul">
        <div v-if="loading" class="load">
          <img
            src="https://talk.openmrs.org/uploads/default/original/2X/d/debba174801e7dac4f8006280b72ae8b0c5bb36d.gif"
            alt="loading items...">
          <p class="lead">Loading Inventory Items...</p>
        </div>
        <ForSaleItem
          v-else
          v-for="item in inventory"
          :item="item"
          :key="item.id"
          :ref="item.id"
        />
      </ul>
    </div>
  </div>
</template>

<script>
import ForSaleItem from '@/components/ForSaleItem';

export default {
  name: 'Buy',
  props: ['getInventory', 'inventory', 'loading'],
  components: {
    ForSaleItem,
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
