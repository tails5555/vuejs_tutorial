import Vue from 'vue'
import App from './App'
import SmallBox from './components/SmallBox'
import router from './router'

Vue.config.productionTip = false

new Vue({
  el: '#app1',
  template: '<h1>Hello, {{ message }}</h1>',
  data: {
    message : 'Vue.js'
  }
});

new Vue({
  el: '#app2',
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
  el: '#app3',
  components: { SmallBox },
  template: '<SmallBox />'
});

Vue.component('own-component', {
  template : `
    <h1>{{ message }}</h1>
  `,
  data : () => ({
    message : '안녕하십니까?'
  })
});

new Vue({
  el: '#component0'
});

new Vue({
  el: '#component0_1',
  template: '<own-component></own-component>'
});

const component1 = {
  template : '<h1>{{ message }}</h1>',
  data : () => ({
    message : '안녕!!!'
  })
};

const component2 = {
  template : '<h1>그래, {{ message }}</h1>',
  data : () => ({
    message : '안녕!!!'
  })
};

new Vue({
  el: '#component1',
  components: {
    'my-component' : component1,
    'your-component' : component2
  },
  template: `
    <div>
      <my-component></my-component>
      <your-component></your-component>
    </div>
  `
});