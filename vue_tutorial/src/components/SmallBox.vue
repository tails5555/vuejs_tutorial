<template>
    <div class="small_box">
        <p>{{ number }}</p>
    </div>
</template>

<script>
export default {
  name: 'SmallBox',
  data: () => ({
    number : 10
  })
}
</script>

<style scoped>
.small_box {
  width: 50px;
  border: 1px solid green;
  background-color: yellowgreen;
  border-radius: 5px;
  text-align: center;
}
</style>
