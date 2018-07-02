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
          <!-- createCartObj(newCartItem), addToCart(newCartItem) -->
          <button
          @click="idMatch(item)"
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
  props: ['item', 'putItem', 'cartTable'],
  data() {
    return {
      responseMessage: '',
      newCartItem: Object,
    };
  },
  methods: {
    createCartObj(obj) {
      this.obj =
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
    setResponseMsg() {
      this.responseMessage =
      'Item successfully added to cart ;)';
    },
    idMatch(obj) { 
      for (let i = 0; i < this.cartTable.length; i++) {
        // let cartItem = this.cartTable[i];
        if (this.item.id === this.cartTable[i].inventory_id) {
          const appendCartObj = {
            id: this.cartTable[i].id,
            putObj: {
              inventory_id: obj.inventory_id,
              cart_item_name: obj.cart_item_name,
              cart_item_price: obj.cart_item_price,
              cart_item_description: obj.cart_item_description,
              cart_item_image_url: obj.cart_item_image_url,
              quantity: this.cartTable[i].quantity + 1,
              active: obj.active
            }
          }
          const result = this.updateCartItem(appendCartObj)
          return result
          break
        } 
        else {
          this.createCartObj(obj)
          const result = this.addToCart(obj)
          return result
          break
        }
        return
        // else if (cartItem.inventory_id !== obj.id) {
        //   this.createCartObj(obj)
        //   return this.addToCart(obj)
        // }
      }
    },
    checkIdMatch(obj) { 
      return this.cartTable.reduce((a,cartItem,c) => {
        if (cartItem.inventory_id == obj.id) {
          const appendCartObj = {
            id: cartItem.id,
            putObj: {
              inventory_id: this.obj.inventory_id,
              cart_item_name: this.obj.cart_item_name,
              cart_item_price: this.obj.cart_item_price,
              cart_item_description: this.obj.cart_item_description,
              cart_item_image_url: this.obj.cart_item_image_url,
              quantity: cartItem.quantity + 1,
              active: this.obj.active
            }
          }
          a = appendCartObj
          // console.log('put', a);
          return this.updateCartItem(a)
        } else if (cartItem.inventory_id !== obj.id) {
          // a = obj
          // console.log(a);
          a = this.createCartObj(a)
          // console.log('post', a);
          return this.addToCart(a)
        }
        return
      }, 
      {})
    },
    test(obj) {
      this.createCartObj(this.obj)
      if (this.checkIdMatch(this.item)) {
        const verifiedCartItem = this.checkIdMatch(this.item)
        this.item.quantity_available --
        // this.updateCartItem(verifiedCartItem)
      }
    },
    addToCart(obj) {
      return fetch('http://localhost:5000/cart', {
        method: 'POST',
        body: JSON.stringify(this.obj),
        headers: {
          'content-type': 'application/json',
          mode: 'cors',
          cache: 'default',
        },
      })
        .then(console.log('POST', this.obj), this.setResponseMsg())
        .catch(error => console.error(error));
    },
    // need to set response message...
    updateCartItem(obj) {
      return fetch((`http://localhost:5000/cart/${obj.id}`), {
        method: 'PUT',
        body: JSON.stringify(obj.putObj),
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
        console.log('PUT', obj)
        // this.setResponseMsg();
        return true;
      })
      // .then((success) => {
      //   if (!success) { return };
      //   // return setTimeout(() => this.redirect(), 3000);
      // });
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
