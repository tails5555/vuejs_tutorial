<template>
  <div id="app" class="container">
    <img src="./assets/logo.png" class="logo">
    <todo-list></todo-list>
  </div>
</template>

<script>
import TodoList from './components/TodoList'

export default {
    name: 'app',
    components: {
        TodoList,
    }
}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}

#app {
  color: #2C3E50;
  margin-top: 60px;
  font-size: 24px;
}

.container {
  max-width: 600px;
  margin: 0 auto;
}

.logo { 
  display: block;
  margin: 20px auto;
  height: 75px;
}
</style>
