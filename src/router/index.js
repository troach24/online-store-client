import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home';
import BuyProducts from '@/views/BuyProducts';
import SellProducts from '@/views/SellProducts';
import AddItem from '@/components/AddItem';
import ShoppingCart from '@/views/ShoppingCart';
import UpdateItem from '@/components/UpdateItem';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/inventory/buy',
      name: 'buy',
      component: BuyProducts,
    },
    {
      path: '/inventory/sell',
      name: 'sell',
      component: SellProducts,
    },
    {
      path: '/inventory/add-item',
      name: 'AddItem',
      component: AddItem,
    },
    {
      path: '/cart',
      name: 'ShoppingCart',
      component: ShoppingCart,
    },
    {
      path: '/inventory/update/:id',
      name: 'UpdateItem',
      component: UpdateItem,
    },
  ],
});
