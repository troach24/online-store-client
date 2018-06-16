<template>
  <div>
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><a href="/#/inventory/buy">Back</a></li>
    </ol>
    <div class="container">
      <h1 class="display-3">CART!</h1>
      <p class="lead">Here is what you've chosen to waste your money on.</p>
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
  ul {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    padding: 0;
    margin-top: 20px;
  }
</style>
