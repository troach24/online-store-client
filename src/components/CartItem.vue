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
  props: ['item']
};
</script>

<style scoped>

</style>
