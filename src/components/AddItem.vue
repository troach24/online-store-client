<template>
  <form @submit.prevent="addItem" class="form-group">
    <label class="col-form-label" for="inputDefault">Item Name:</label>
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
    <label for="exampleTextarea">Item Description:</label>
    <textarea class="form-control" id="exampleTextarea" rows="3"></textarea>
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
  </form>
</template>

<script>
export default {
  data() {
    return {
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
    // postItem() {

    // },
    addItem() {
      // return fetch('https://marketplace-server-db.herokuapp.com/inventory', {
      return fetch('http://localhost:5000/inventory', {
      method: 'POST',
      body: JSON.stringify(this.item),
      headers: {
        'content-type': 'application/json',
        'mode': 'cors',
        'cache': 'default',
      }
    })
      .then(this.$router.push("/sell"))
      // .then(getInventory)
      // .then(scores => getScores())
      .catch(err => console.error);
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
</style>
