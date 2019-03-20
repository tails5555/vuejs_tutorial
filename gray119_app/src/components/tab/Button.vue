<template>
    <button
        class="w3-bar-item w3-button w3-third nav-button"
        v-bind:class="[ actived ? 'w3-pink' : 'w3-brown' ]"
    >
        {{ menu }}
    </button>
</template>

<script>
export default {
    name: 'tab-button',
    props: ['menu', 'actived']
}
</script>

<style scoped>
.nav-button {
    width: calc(100% / 3);
}
</style>