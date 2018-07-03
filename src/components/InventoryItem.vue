<template>
  <div id="item-container">
    <li>
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
          <div>
            <button @click="loadParams()" type="button" class="btn btn-secondary">Edit</button>
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
  props: ['item', 'getInventory'],
  methods: {
    // Access selected item's data directly from database to pre-populate form
    loadParams() {
      const selectedId = this.item.id;
      this.$router.push(`/inventory/update/${selectedId}`);
    },
    // Remove item from inventory database
    deleteItem() {
      return fetch((`${API.API_URL}/inventory/${this.item.id}`), {
        method: 'DELETE',
        body: JSON.stringify(this.item),
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
        alert(`${this.item.name} removed from inventory`);
        this.getInventory();
        return true;
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
</style>
