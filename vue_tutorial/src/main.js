// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import SmallBox from './components/SmallBox'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});

new Vue({
  el: '#app2',
  template: '<h1>Hello, {{ message }}</h1>',
  data: {
    message : 'Vue.js'
  }
});

new Vue({
  el: '#app3',
  template: '<button v-on:click="this.handleClick">클릭</button>',
  data: {
    message : '안녕, Vue.js!'
  },
  methods: {
    handleClick() {
      alert(this.message);
    }
  }
});

new Vue({
  el: '#app4',
  components: { SmallBox },
  template: '<SmallBox />'
});