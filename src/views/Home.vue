<template>
  <div class="home">
    <ul class="nav nav-tabs">
      <li class="nav-item">
        <a class="nav-link active show" data-toggle="tab" href="#/buy">Buy</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" data-toggle="tab" href="#/sell">Sell</a>
      </li>
    </ul>
    <router-link></router-link>
    <router-link></router-link>
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
