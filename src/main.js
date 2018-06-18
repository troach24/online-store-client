// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';

import axios from 'axios';
import VueAxios from 'vue-axios';
import { StripeCheckout } from 'vue-stripe';

import 'bootswatch/dist/united/bootstrap.css';

import App from './App';
import router from './router';

Vue.use(VueAxios, axios);
Vue.component('stripe-checkout', StripeCheckout);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
