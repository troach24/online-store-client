<template>
  <div>
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><a href="/#/inventory/buy">Back</a></li>
    </ol>
    <div class="container">
      <h1 class="display-3">CART!</h1>
      <p class="lead">Here is what you've chosen to waste your money on.</p>
      <hr class="my-4">
      <h2>{{ paidStatusMsg }}</h2>
      <h2>{{ responseMessage }}</h2>
      <ul>
        <CartItem v-for="cartItem in cartTable"
        :cartItem="cartItem"
        :key="cartItem.id"
        :getCartItems="getCartItems"
        :responseMessage="responseMessage" />
      </ul>
      <div>
        <button class="btn btn-success btn-lg" @click="checkout">Checkout</button>
      </div>
    </div>
  </div>
</template>

<script>
import CartItem from '@/components/CartItem';
import API from '../API';

export default {
  components: {
    CartItem,
  },
  props: ['getCartItems', 'cartTable', 'getInventory', 'inventory'],
  beforeMount() {
    this.getCartItems();
  },
  data() {
    return {
      purchaseData: {
        amount: Number,
      },
      paidStatusMsg: '',
      responseMessage: '',
    };
  },
  methods: {
    setResponseMsg() {
      this.responseMessage = 'Item successfully deleted from cart';
    },
    getTotal(arr) {
      return arr.reduce((total, checkoutItem) => {
        total += checkoutItem.cart_item_price * checkoutItem.quantity;
        this.purchaseData.amount = total;
        return total;
      }, 0);
    },
    displayError(err, paidStatusMsg) {
      const message = `There was an error processing your credit card: ${err.message}`;
      paidStatusMsg = message;
    },
    checkout() {
      this.getCartItems();
      this.$checkout.open({
        name: 'Enter credit card info',
        currency: 'USD',
        amount: this.getTotal(this.cartTable) * 100,
        token: (token) => {
          const payLoad = {
            stripeToken: token.id,
            amount: this.purchaseData.amount,
          };
          fetch(`${API.API_URL}/accept-payment`, {
            method: 'post',
            body: JSON.stringify(payLoad),
            headers: {
              'Content-Type': 'application/json',
            },
          })
            .then(res => res.json())
            .then((res) => {
              // display total charged to client
              if (res.failure_code) {
                this.paidStatusMsg = 'There was an error processing your card';
              } else {
                this.paidStatusMsg = `Your card was charged $${res.amount / 100}`;
              }
            })
            .catch(error => console.error(error));
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
