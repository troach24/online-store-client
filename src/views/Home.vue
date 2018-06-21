<template>
  <div class="home">
    <div class="jumbotron text-center">
      <h1 class="display-3">Shopping is Eazy!</h1>
      <p class="lead">
        Eazy Market is an online marketplace for users to buy and sell a wide variety of products.
      </p>
      <hr class="my-4">
      <p class="lead">
        <a class="btn btn-primary btn-lg" :href="'#/inventory/buy'" role="button">
        Buy Products
        </a>
        <a class="btn btn-primary btn-lg" href="#/inventory/sell" role="button">
        Sell Products
        </a>
      </p>
    </div>
  </div>
</template>

<script>
import BuyProducts from '@/views/BuyProducts';
import SellProducts from '@/views/SellProducts';
import AddItem from '@/components/AddItem';
import ShoppingCart from '@/views/ShoppingCart';

export default {
  components: {
    BuyProducts,
    SellProducts,
    AddItem,
    ShoppingCart,
  },
};
</script>

<style>
  .home {
    height: 85vh;
    overflow: auto;
  }
</style>

