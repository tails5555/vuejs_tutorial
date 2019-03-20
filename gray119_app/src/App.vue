<template>
  <div id="main">
    <control-tab />
    <main-view />
  </div>
</template>

<script>
import { Tab } from './components/tab';
import { LyricView, SearchView, MainView } from './pages';

export default {
  name: 'App',
  components: {
    'main-view': MainView, 
    LyricView, 
    SearchView, 
    'control-tab': Tab
  }
}
</script>

<style>
html, body {
  padding: 0;
  margin: 0;
  height: 100%;
}

h1, h2, h3, h4, h5, h6 {
  margin-top: 0;
  color: #FFFFFF;
}

#main {
  display: fixed;
  top: 0; 
  left: 0;
  background: url("./images/119_background.jpg") no-repeat;
  background-size: cover;
  min-width: 100%;
  min-height: 100%;
}
</style>