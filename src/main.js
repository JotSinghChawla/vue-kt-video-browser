import Vue from 'vue';
import App from './App.vue'

new Vue({
  el: '#app',
  render: function(createElement) {
    return createElement(App);
  }
  // redner: h => h(App)                      // oneline equivalent method
});
// }).$mount('#app');                         // can also be used instead of el: '#app' to describe Vue template