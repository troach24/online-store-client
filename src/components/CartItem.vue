<template>
  <div id="item-container">
    <li>
      <div class="card border-primary mb-3" style="width: 20rem; height: 20rem;">
        <div class="card-body">
          <h4 class="card-title">{{item.cart_item_name}}</h4>
          <div class="card-middle">
            <img class="card-img" :src="item.cart_item_image_url" alt="">
          </div>
          <p class="card-text"> {{item.cart_item_description}} </p>
      </div>
        <div class="card-bottom">
          <small> {{item.quantity}} left in stock</small>
          <div>
            <!-- change button colors -->
            <button type="button" class="btn btn-info">Edit</button>
            <button type="button" class="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    </li>
  </div>
</template>

<script>
export default {
  props: ['item'],
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
