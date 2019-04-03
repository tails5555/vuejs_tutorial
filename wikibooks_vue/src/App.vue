<template>
  <div id="app">
    <div class="text-center">
      <img src="./assets/logo.png">
    </div>
    <div class="container text-center">
      <login></login>
      <register></register>
      <verses></verses>
    </div>
  </div>
</template>

<script>
import Login from './components/Login';
import Register from './components/Register';
import Verses from './components/Verses';

export default {
  name: 'app',
  components: {
    Login, Register, Verses
  }
}
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
}
</style>
