<template>
  <div>
    <ol class="breadcrumb">
      <li class="breadcrumb-item active">Buy</li>
      <li class="breadcrumb-item"><a href="/#/inventory/sell">Sell</a></li>
    </ol>
    <div class="container">
      <h1 class="display-3">BUY THINGS!</h1>
      <p class="lead">This is where you can select items to purchase 😀</p>
      <hr class="my-4">
      <ul class="item-ul">
        <ForSaleItem v-for="item in inventory"
        :item="item"
        :key="item.id"
        :ref="item.id" />
      </ul>
    </div>
  </div>
</template>

<script>
import ForSaleItem from '@/components/ForSaleItem';

export default {
  name: 'Buy',
  props: ['getInventory', 'inventory'],
  components: {
    ForSaleItem,
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

