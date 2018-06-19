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
        :cartItem="cartItem"
        :key="cartItem.id"
        :getCartItems="getCartItems" />
      </ul>
      <div>
        <button class="btn btn-success btn-lg" @click="checkout">Checkout</button>
      </div>
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
  methods: {
    getTotal(arr) {
      return arr.reduce((total, checkoutItem) => {
        total += checkoutItem.cart_item_price * checkoutItem.quantity;
        return total;
      },0)
    },
    checkout() {
      this.getCartItems();
      // this.$checkout.close() 
      // is also available.
      this.$checkout.open({
        name: 'Shut up and take my money!',
        currency: 'USD',
        amount: this.getTotal(this.cartTable) * 100,
        token: (token) => {
          // Send the token to your server
          // for payment or subscription handling,
          // or do whatever you want with it
          // I don't really care. 
        },
      });
    },
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
  button {
    margin-bottom: 20px;
  }
</style>
