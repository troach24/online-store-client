<template>
  <div>
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><a href="/#/buy">Buy</a></li>
      <li class="breadcrumb-item active">Sell</li>
    </ol>
    <div class="jumbotron">
      <h1 class="display-3">SELL THINGS!</h1>
      <p class="lead">This is where you can see the items you have up for SALE 😀</p>
      <hr class="my-4">
      <p>This store is built to showcase my very own full stack CRUD app!</p>
      <ul v-for="inventoryItem in inventory" :key="inventoryItem.id">
        <li>{{inventoryItem.description}}</li>
      </ul>
      <p class="lead">
        <a class="btn btn-primary btn-lg" href="#" role="button">Join Community</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sell',
  props: ['getInventory', 'inventory'],
};
</script>
