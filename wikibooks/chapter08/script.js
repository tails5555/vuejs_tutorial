let bus = new Vue();

Vue.component('rapper', {
    template: "#rapper-template",
    props: ['name'],
    data: function() {
        return {
            votes: 0
        }
    },
    methods: {
        vote: function(event) {
            const rapper = event.srcElement.textContent;
            this.votes += 1;
            this.$emit('voted', rapper);
        },
        reset: function() {
            this.votes = 0;
        }
    },
    created () {
        bus.$on('reset', this.reset);
    }
});

new Vue({
    el: '#app',
    data: {
        votes : {
            count: 0,
            logs : []
        }
    },
    methods: {
        countVote: function(rapper) {
            this.votes.count += 1;
            this.votes.logs.push(`${rapper} 는 저희와 함께 갑시다!`);
        },
        reset: function() {
            this.votes = {
                count: 0,
                logs : []
            };
            bus.$emit('reset')
        }
    },
    created () {
        bus.$on('voted', this.countVote)
    }
})