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
import Payment from '@/components/Payment';

export default {
  components: {
    BuyProducts,
    SellProducts,
    AddItem,
    ShoppingCart,
    Payment,
  },
};
</script>
