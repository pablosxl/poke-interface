import Vue from 'vue'
import App from './App.vue'
import store from './store'
import vuetify from 'vuetify';
import router from './router';
import VueTheMask from 'vue-the-mask';
import Notifications from 'vue-notification';
import Vuetify from 'vuetify/lib';
import vuetifyOptions from './plugins/vuetify';
import money from 'v-money';

Vue.config.productionTip = false

Vue.use(VueTheMask);
Vue.use(Notifications);
Vue.use(money, {precision: 2})

new Vue({
  store,
  vuetify: new Vuetify(vuetifyOptions),
  router,
  render: h => h(App)
}).$mount('#app')
