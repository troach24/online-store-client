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
          @click="addToCart(newCartItem), postToCart(newCartItem)"
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
import API from '../API';

export default {
  props: ['item'],
  data() {
    return {
      newCartItem: Object,
    };
  },
  methods: {
    // Create an object that the shopping cart database can accept
    addToCart() {
      this.newCartItem =
      {
        inventory_id: this.item.id,
        cart_item_name: this.item.name,
        cart_item_price: this.item.price,
        cart_item_description: this.item.description,
        cart_item_image_url: this.item.image_url,
        quantity: 1,
        active: true,
      };
    },
    // Add item to shopping cart
    postToCart() {
      this.item.quantity_available--;
      return fetch(`${API.API_URL}/cart`, {
        method: 'POST',
        body: JSON.stringify(this.newCartItem),
        headers: {
          'content-type': 'application/json',
          mode: 'cors',
          cache: 'default',
        },
      })
        .then(alert(`1 ${this.item.name} successfully added to shopping cart!`))
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
