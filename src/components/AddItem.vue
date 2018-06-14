<template>
  <form @submit.prevent="addItem" class="form-group">
    <label class="col-form-label" for="inputDefault">ForSaleItem Name:</label>
    <input
    v-model="item.name"
    type="text"
    class="form-control"
    placeholder="Enter item name..."
    id="inputDefault">
    <label class="control-label">Price (Whole dollar amount):</label>
    <div class="form-group" id="price-input">
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text">$</span>
        </div>
        <input
        v-model="item.price"
        type="text"
        class="form-control"
        placeholder="0"
        aria-label="Amount (to the nearest dollar)">
        <div class="input-group-append">
          <span class="input-group-text">.00</span>
        </div>
      </div>
    </div>
    <label for="exampleTextarea">ForSaleItem Description:</label>
    <textarea
    v-model="item.description"
    class="form-control"
    id="exampleTextarea"
    rows="3">
    </textarea>
    <label for="exampleSelect1">Quantity Available:</label>
      <select
      v-model="item.quantity_available"
      class="form-control"
      id="exampleSelect1">
        <option>1</option><option>2</option><option>3</option>
        <option>4</option><option>5</option><option>6</option>
        <option>7</option><option>8</option><option>9</option>
        <option>10</option>
      </select>
    <label class="col-form-label" for="inputDefault">Image URL:</label>
    <input
    v-model="item.image_url"
    type="text" class="form-control"
    placeholder="Paste image URL here..."
    id="inputDefault">
    <button id="submit-button" type="submit" class="btn btn-primary">Submit</button>
    <p id="response-message">{{responseMessage}}</p>
    <!-- implement this as response message vvvvv
    <div class="alert alert-dismissible alert-success">
      <button type="button" class="close" data-dismiss="alert">&times;</button>
      <strong>Well done!</strong> You successfully read <a href="#" class="alert-link">this important alert message</a>.
    </div> -->
  </form>
</template>

<script>
export default {
  data() {
    return {
      responseMessage: '',
      item: {
        name: '',
        price: '',
        quantity_available: 0,
        image_url: '',
      },
    };
  },
  props: ['getInventory'],
  methods: {
    redirect() {
      this.$router.push('/sell');
    },
    setResponseMsg() {
      this.responseMessage =
      'ForSaleItem added successfully! Taking you back to your sales item dashboard..';
    },
    addItem() {
      return fetch('http://localhost:5000/inventory', {
        method: 'POST',
        body: JSON.stringify(this.item),
        headers: {
          'content-type': 'application/json',
          mode: 'cors',
          cache: 'default',
        },
      })
        .then(this.setResponseMsg())
        .then(setTimeout(() => { this.redirect(); }, 3000))
        .catch(error => console.error(error));
    },
  },
};
</script>

<style scoped>
  .form-group {
    width: 70vh;
  }
  #price-input {
    width: 15vh;
  }
  label {
    padding-top: 10px;
  }
  #submit-button {
    margin-top: 20px;
  }
  #response-message {
    margin-top: 20px;
  }
</style>
