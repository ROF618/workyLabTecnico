import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';


Vue.config.productionTip = false
Vue.use(BootstrapVue);

new Vue({
  render: h => h(App),
  el: '#app',

}).$mount('#app')