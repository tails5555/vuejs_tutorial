<template>
    <ul class="list-group">
        <li class="list-group-item" v-for="verse in store.verses" v-bind:key="verse.id">
            {{ verse.lyric }} - {{ verse.artist }}
            <button class="btn btn-danger">
                <i class="fas fa-heart"></i> HEART {{ verse.hearts }}
            </button>
        </li>
    </ul>
</template>

<script>
import { store } from '../stores/data';

export default {
    data () {
        return { store }
    }
}
</script>