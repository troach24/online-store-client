<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <a class="navbar-brand" href="/">WOOF-E-MART</a>
  <div class="collapse navbar-collapse" id="navbarColor01">
    <a
    v-if="$route.name == 'buy' || $route.name == 'home'"
    class="btn btn-info my-2 my-sm-0"
    href="/#/cart"
    role="button">
    View Cart
    </a>
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
