// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';

import axios from 'axios';
import VueAxios from 'vue-axios';
import VueStripeCheckout from 'vue-stripe-checkout';

import 'bootswatch/dist/united/bootstrap.css';

import App from './App';
import router from './router';

const options = {
  key: 'pk_test_fTRwe6G0jpZ0VubVkU4pAYwn',
  image: 'http://instepchurch.weebly.com/uploads/1/2/3/0/12308158/6479659.jpg',
  locale: 'auto',
  currency: 'node',
  panelLabel: 'Pay {{amount}}',
};

Vue.use(VueAxios, axios);
Vue.use(VueStripeCheckout, options);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
