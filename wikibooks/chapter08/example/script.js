let bus = new Vue();

Vue.component('chariot', {
    template: '#chariot-template',
    props: ['chariot', 'selected'],
    methods: {
        update_selected_element : function() {
            this.$emit('select', this.chariot);
        }
    },
    computed: {
        btn_obj : function() {
            const chariotJSON = JSON.stringify(this.chariot);
            const selectedJSON = JSON.stringify(this.selected);
            if(chariotJSON === selectedJSON) {
                return {
                    active: false, message: 'Riding!'
                } 
            } else {
                if(selectedJSON === '{}') {
                    return {
                        active: true, message: 'Pick Chariot'
                    };
                } else {
                    if(this.chariot.count < this.selected.count) {
                        return {
                            active: true, message: 'Dismiss Horses'
                        }
                    } else {
                        return {
                            active: true, message: 'Hire Horses'
                        }
                    }
                }
            }
        }
    }
});

new Vue({
    el: '#app',
    data: {
        chariots: [
            { name: 'Olympus', count: 4 },
            { name: 'Sagitta', count: 3 },
            { name: 'Icarus', count: 2 },
            { name: 'Abraxas', count: 1 }
        ],
        selected: { }
    },
    methods: {
        selected_update : function(chariot) {
            this.selected = chariot;
        }
    }
})