import Vue from 'vue';
import PersonalCosts from './Personal-costs.vue';

Vue.config.productionTip = false

new Vue({
  render: h => h(PersonalCosts),
}).$mount('#app')
