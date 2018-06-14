<template>
  <div>
    <!-- <ol class="breadcrumb">
      <li class="breadcrumb-item"><a href="/#/buy">Buy</a></li>
      <li class="breadcrumb-item active">Sell</li>
    </ol> -->
    <div class="container">
      <h1 class="display-3">CART!</h1>
      <p class="lead">Here is what you've chosen to waste your money on.</p>
      <!-- <p class="lead">
        <a class="btn btn-primary btn-lg" href="/#/add-item" role="button">Add Item</a>
      </p> -->
      <hr class="my-4">
      <ul>
        <CartItem v-for="cartItem in cartTable"
        :item="cartItem"
        :key="cartItem.id" />
      </ul>
    </div>
  </div>
</template>

<script>
import CartItem from '@/components/CartItem';

export default {
  components: {
    CartItem,
  },
  props: ['getCartItems', 'cartTable', 'getInventory', 'inventory'],
  beforeMount() {
    this.getCartItems();
  },
};
</script>

<style scoped>

</style>
