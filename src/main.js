import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import vuescroll from 'vue-scroll'

import VueCarousel from 'vue-carousel';
import Transitions from 'vue2-transitions'

require('./assets/styles/main.scss');

Vue.config.productionTip = false;

Vue.use(VueCarousel);
Vue.use(Transitions);
Vue.use(VueAxios, axios);
Vue.use(vuescroll);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

Vue.config.devtools = true;

