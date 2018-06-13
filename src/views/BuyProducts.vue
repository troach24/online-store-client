<template>
  <div>
    <ol class="breadcrumb">
      <li class="breadcrumb-item active">Buy</li>
      <li class="breadcrumb-item"><a href="/#/sell">Sell</a></li>
    </ol>
    <div class="jumbotron">
      <h1 class="display-3">BUY THINGS!</h1>
      <p class="lead">This is where you can select items to purchase 😀</p>
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
  name: 'Buy',
  props: ['getInventory', 'inventory'],
};
</script>
