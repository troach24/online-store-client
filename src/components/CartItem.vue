<template>
  <div id="item-container">
    <li>
      <div class="card border-primary mb-3" style="width: 20rem; height: 20rem;">
        <div class="card-body">
          <h4 class="card-title">{{cartItem.cart_item_name}}</h4>
          <div class="card-middle">
            <img class="card-img" :src="cartItem.cart_item_image_url" alt="">
          </div>
          <p class="card-text"> {{cartItem.cart_item_description}} </p>
      </div>
        <div class="card-bottom">
            <div class="form-group">
              <label for="exampleSelect1">Quantity</label>
              <select
              @change="updateQuantity"
              class="form-control"
              name="template"
              v-model="cartItem.quantity" id="options">
                  <option
                  :key="quantity"
                  v-for="quantity in quantities"
                  :selected="quantity == cartItem.quantity ? cartItem.quantity : 1"
                  :value="quantity">
                    {{ quantity }}
                  </option>
              </select>
            </div>
          <div>
            <button @click="deleteItem()" type="button" class="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    </li>
  </div>
</template>

<script>
import API from '../API';

export default {
  props: ['cartItem', 'getCartItems'],
  data() {
    return {
      quantities: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      category: 1,
    };
  },
  methods: {
    // Use after quantity update event
    updateItem(cartItem) {
      return fetch((`${API.API_URL}/cart/${this.cartItem.id}`), {
        method: 'PUT',
        body: JSON.stringify(cartItem),
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
        alert(`Updated ${this.cartItem.cart_item_name} quantity to ${this.cartItem.quantity}`);
        return true;
      });
    },
    // Quantitiy updates when dropdown value is changed
    updateQuantity(value) {
      const optionElements = value.path[0];
      const optionArray = [...optionElements];
      let i;
      for (i = 0; i < optionArray.length; i++) {
        if (optionArray[i].selected === true) {
          this.cartItem.quantity = +(optionArray[i].value);
          this.updateItem(this.cartItem);
        }
      }
    },
    // Remove item from cart
    deleteItem() {
      return fetch((`${API.API_URL}/cart/${this.cartItem.id}`), {
        method: 'DELETE',
        body: JSON.stringify(this.cartItem),
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
        alert(`${this.cartItem.cart_item_name} removed from cart`);
        this.getCartItems();
      });
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
label {
  margin: 2px;
}
</style>
