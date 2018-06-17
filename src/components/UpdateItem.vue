<template>
  <form @submit.prevent="updateItem" class="form-group">
    <label class="col-form-label" for="inputDefault">ForSaleItem Name:</label>
    <input
    autocomplete="off"
    v-model="selectedInventoryItem.name"
    type="text"
    class="form-control"
    id="inputDefault">
    <label class="control-label">Price (Whole dollar amount):</label>
    <div class="form-group" id="price-input">
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text">$</span>
        </div>
        <input
        v-model="selectedInventoryItem.price"
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
    v-model="selectedInventoryItem.description"
    class="form-control"
    id="exampleTextarea"
    rows="3">
    </textarea>
    <label for="exampleSelect1">Quantity Available:</label>
      <select
      v-model="selectedInventoryItem.quantity_available"
      class="form-control"
      id="exampleSelect1">
        <option>1</option><option>2</option><option>3</option>
        <option>4</option><option>5</option><option>6</option>
        <option>7</option><option>8</option><option>9</option>
        <option>10</option>
      </select>
    <label class="col-form-label" for="inputDefault">Image URL:</label>
    <input
    v-model="selectedInventoryItem.image_url"
    type="text" class="form-control"
    placeholder="Paste image URL here..."
    id="inputDefault">
    <button id="submit-button" type="submit" class="btn btn-primary">Submit</button>
    <p id="response-message">{{responseMessage || errorMessage}}</p>
  </form>
</template>

<script>
export default {
  data() {
    return {
      responseMessage: '',
      errorMessage: '',
    };
  },
  props: ['getItemById', 'selectedInventoryItem'],
  created() {
    this.getItemById(this.$route.params.id);
  },
  methods: {
    redirect() {
      this.$router.push('/inventory/sell');
    },
    setResponseMsg() {
      this.responseMessage =
      'Item updated successfully! Taking you back to your sales item dashboard..';
    },
    updateItem() {
      return fetch((`http://localhost:5000/inventory/${this.$route.params.id}`), {
        method: 'PUT',
        body: JSON.stringify(this.selectedInventoryItem),
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
        this.setResponseMsg();
        return true;
      }).then((success) => {
        if (!success) { return };
        return setTimeout(() => this.redirect(), 3000);
      });
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
