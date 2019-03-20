<template>
    <div class="w3-bar">
        <tab-button menu="Lyric" actived="true" />
        <tab-button menu="Artist" />
        <tab-button menu="Entertain" />
    </div>
</template>

<script>
import Button from './Button';
export default {
    name: 'tab',
    components: {
        'tab-button' : Button
    }
}
</script>

<style scoped>

</style>