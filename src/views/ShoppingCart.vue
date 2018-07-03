<template>
  <div>
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><a href="/#/inventory/buy">Back</a></li>
    </ol>
    <div class="container">
      <h1 class="display-3">CART!</h1>
      <p class="lead">Here is what you've chosen to waste your money on.</p>
      <hr class="my-4">
      <h5 id="paid-status-msg">{{ paidStatusMsg }}</h5>
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
import API from '../API';

export default {
  components: {
    CartItem,
  },
  props: ['getCartItems', 'cartTable', 'getInventory', 'inventory'],
  // Retrieve cart data on page load
  beforeMount() {
    this.getCartItems();
  },
  data() {
    return {
      purchaseData: {
        amount: Number,
      },
      paidStatusMsg: '',
    };
  },
  methods: {
    // Pre-populate stripe payment form with the checkout total
    getTotal(arr) {
      return arr.reduce((total, checkoutItem) => {
        total += checkoutItem.cart_item_price * checkoutItem.quantity;
        this.purchaseData.amount = total;
        return total;
      }, 0);
    },
    // Checkout info sent to stripe account dashboard
    checkout() {
      this.getCartItems();
      this.$checkout.open({
        name: 'CC #: 4242 4242 4242 4242',
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
              // Display total charged to client || CC processing error
              if (res.failure_code) {
                alert('There was an error processing your card. Please try again.');
                this.paidStatusMsg =
                'Your card was not charged. Please re-enter your payment info.';
              } else {
                this.cartTable = [];
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
  #paid-status-msg {
    color: red;
  }
</style>
