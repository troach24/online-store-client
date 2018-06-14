<template>
  <div id="item-container">
    <li @click="clkd">
      <div class="card border-primary mb-3" style="width: 20rem; height: 20rem;">
        <div class="card-body">
          <h4 class="card-title">{{inventoryItem.name}}</h4>
          <div class="card-middle">
            <img class="card-img" :src="inventoryItem.image_url" alt="">
          </div>
          <p class="card-text"> {{inventoryItem.description}} </p>
      </div>
        <div class="card-bottom">
          <small> {{inventoryItem.quantity_available}} left in stock</small>
          <button type="button" class="btn btn-primary">Add to Cart</button>
        </div>
      </div>
    </li>
  </div>
</template>

<script>
export default {
  props: ['inventoryItem'],
  methods: {
    clkd(event) {
      console.log(event)
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
