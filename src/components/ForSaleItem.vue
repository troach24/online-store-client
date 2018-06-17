<template>
  <div id="item-container">
    <li :item="item">
      <div class="card border-primary mb-3" style="width: 20rem; height: 20rem;">
        <div class="card-body">
          <h4 class="card-title">{{item.name}}</h4>
          <div class="card-middle">
            <img class="card-img" :src="item.image_url" alt="">
          </div>
          <p class="card-text"> {{item.description}} </p>
      </div>
        <div class="card-bottom">
          <small> {{item.quantity_available}} left in stock</small>
          <button
          @click="addToCart(), postToCart()"
          type="button"
          class="btn btn-info">
          Add to Cart
          </button>
        </div>
      </div>
    </li>
  </div>
</template>

<script>
export default {
  props: ['item'],
  data() {
    return {
      responseMessage: '',
      newCartItem: Object,
    };
  },
  methods: {
    addToCart() {
      this.newCartItem =
      {
        cart_item_name: this.item.name,
        cart_item_price: this.item.price,
        cart_item_description: this.item.description,
        cart_item_image_url: this.item.image_url,
        quantity: 4,
      };
    },
    setResponseMsg() {
      this.responseMessage =
      'ForSaleItem added successfully! Taking you back to your sales item dashboard..';
    },
    postToCart() {
      return fetch('http://localhost:5000/cart', {
        method: 'POST',
        body: JSON.stringify(this.newCartItem),
        headers: {
          'content-type': 'application/json',
          mode: 'cors',
          cache: 'default',
        },
      })
        // .then(this.setResponseMsg())
        // .then(setTimeout(() => { this.redirect(); }, 3000))
        .catch(error => console.error(error));
    },
  },
};
</script>

<style scoped>
li {
  list-style-type: none;
}
.card-middle {
  display: flex;
  justify-content: center;
  align-content: flex-end;
}
.card-img {
  height: 100px;
  width: 100px;
  margin-bottom: 20px;
  align-self: center;
}
.card-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin-bottom: 10px;
}
</style>
