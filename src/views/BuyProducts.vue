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
      <ul class="item-ul">
        <ForSaleItem v-for="item in inventory"
        :item="item"
        :key="item.id"
        :ref="item.id"
        :checkIdMatch="checkIdMatch"
        :putItem="putItem" />
      </ul>
    </div>
  </div>
</template>

<script>
import ForSaleItem from '@/components/ForSaleItem';

export default {
  name: 'Buy',
  props: ['getInventory', 'inventory', 'cartTable'],
  components: {
    ForSaleItem,
  },
  beforeMount() {
    this.getInventory();
  },
  methods: {
    putItem(obj) {
      console.log(obj);
      return fetch((`http://localhost:5000/cart/${obj.id}`), {
        method: 'PUT',
        body: JSON.stringify(obj),
        headers: {
          'content-type': 'application/json',
          mode: 'cors',
          cache: 'default',
        },
      }).then((res) => {
        if (res.status === 500) {
          this.errorMessage = 'Something went wrong. Please try again';
          throw new Error(this.errorMessage);
          return false;
        }
        // this.setResponseMsg();
        return true;
      }).then((success) => {
        if (!success) { return };
        return setTimeout(() => this.redirect(), 3000);
      });
    },
    checkIdMatch(obj) {
      return this.cartTable.map(cartItem => {
        if (cartItem.inventory_id == obj.inventory_id)  {
          putItem(obj)
        }
      })
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

