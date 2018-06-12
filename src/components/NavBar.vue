<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <a class="navbar-brand" href="#">Marketplace</a>
  <button class="navbar-toggler"
  type="button"
  data-toggle="collapse"
  data-target="#navbarColor01"
  aria-controls="navbarColor01"
  aria-expanded="false"
  aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarColor01">
    <!-- <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Pricing</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">About</a>
      </li>
    </ul> -->
    <button class="btn btn-info my-2 my-sm-0" type="button">View Cart</button>
  </div>
</nav>
</template>

<script>
export default {
};
</script>

<style scoped>
#navbarColor01 {
  display: flex;
  flex-direction: row-reverse;
}
</style>
