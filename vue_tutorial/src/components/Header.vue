<template>
    <div class="header">
        <h1>Header</h1>
        <h2>{{ message }}</h2>
    </div>
</template>

<script>
export default {
  name: 'Header',
  data: () => ({
    message: 'Hello, Vue.js!'
  })
}
</script>

<style scoped>
.header {
  background-color: paleturquoise;
  text-align: center;
}
</style>
