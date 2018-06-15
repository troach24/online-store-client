<template>
  <div>
    <ol class="breadcrumb">
      <li class="breadcrumb-item active">Buy</li>
      <li class="breadcrumb-item"><a href="/#/inventory/sell">Sell</a></li>
    </ol>
    <div class="container">
      <h1 class="display-3">BUY THINGS!</h1>
      <p class="lead">This is where you can select items to purchase 😀</p>
      <hr class="my-4">
      <p>This store is built to showcase my very own full stack CRUD app!</p>
      <ul class="item-ul">
        <ForSaleItem v-for="item in inventory"
        :item="item"
        :key="item.id"
        :ref="item.id" />
      </ul>
    </div>
  </div>
</template>

<script>
import ForSaleItem from '@/components/ForSaleItem';

export default {
  name: 'Buy',
  props: ['getInventory', 'inventory'],
  components: {
    ForSaleItem,
  },
  beforeMount() {
    this.getInventory();
  },
  data() {
    return {
      responseMessage: '',
      cartItem: {
        inventory_id: 0,
        quantity: 0,
      },
    };
  },
  methods: {
    setResponseMsg() {
      this.responseMessage =
      'ForSaleItem added successfully! Taking you back to your sales item dashboard..';
    },
    addItem() {
      return fetch('http://localhost:5000/cart', {
        method: 'POST',
        body: JSON.stringify(this.cartItem),
        headers: {
          'content-type': 'application/json',
          mode: 'cors',
          cache: 'default',
        },
      })
        .then(this.setResponseMsg())
        .then(setTimeout(() => { this.redirect(); }, 3000))
        .catch(error => console.error);
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
</style>

