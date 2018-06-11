<template>
  <div id="app">
    <nav-bar></nav-bar>
    <router-view class="container"/>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar';

export default {
  components: {
    NavBar,
  },
};
</script>

<style>

</style>
