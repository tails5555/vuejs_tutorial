<template>
  <div id="main">
    <MainView />
  </div>
</template>

<script>
import { LyricView, SearchView, MainView } from './pages';

export default {
  name: 'App',
  components: {
    MainView, LyricView, SearchView
  }
}
</script>

<style> 
#main {
  background: url("./images/119_background.jpg") no-repeat center center fixed;
  color: #FFFFFF;
}
</style>