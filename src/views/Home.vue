<template>
  <div>
    <div class="jumbotron">
      <h1 class="display-3">Welcome to marketplace!</h1>
      <p
      class="lead">
      This is a simple web store for buying or selling products.
      Click the corresponding button below to get started!
      </p>
      <hr class="my-4">
      <p class="lead">
        <a class="btn btn-primary btn-lg" :href="'#/buy'" role="button">
        Buy Products
        </a>
        <a class="btn btn-primary btn-lg" href="#/sell" role="button">
        Sell Products
        </a>
      </p>
    </div>
  </div>
</template>

<script>
import BuyProducts from '@/components/BuyProducts';
import SellProducts from '@/components/SellProducts';

export default {
  components: {
    BuyProducts,
    SellProducts,
  },
};
</script>
