import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home';
import BuyProducts from '@/views/BuyProducts';
import SellProducts from '@/views/SellProducts';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/buy',
      name: 'buy',
      component: BuyProducts,
    },
    {
      path: '/sell',
      name: 'sell',
      component: SellProducts,
    },
  ],
});
