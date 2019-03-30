Vue.component('rapper', {
    template: '#rapper-template',
    props: ['rapper'],
    data: function() { 
        return {
            image_url: '#',
            own_label: '무소속',
        }
    },
    mounted: function() {
        const self = this;
        const { id, main_label } = this.rapper;
        axios.get(`http://localhost:8000/api/artist/profile/${id}/`)
            .then(function(res) {
                const { data } = res;
                self.image_url = data && data.img_file;
            })
            .catch(function(error) {
                console.log('Profile Server Error!');
            });
        
        axios.get(`http://localhost:8000/api/artist/label/${main_label}/`)
            .then(function(res) {
                const { data } = res;
                self.own_label = data && data.name;
            })
            .catch(function(error) {
                console.log('Label Server Error!');
            });
    },
    methods: {
        upvote_rapper: function(rapper) {
            axios({
                url: `http://127.0.0.1:8000/api/artist/musician/upvote/?id=${rapper.id}`,
                method: 'put'
            })
            .then(function(res) {
                const { data } = res;
                const { votes } = data.fields;
                rapper.votes = votes;
            })
            .catch(function(error) {
                console.log('Rapper Server Error!');
            });
        },
        editing_rapper: function(rapper) {
            rapper.editing = true;
        },
        update_rapper: function(rapper) {
            axios({
                url: `http://127.0.0.1:8000/api/artist/musician/${rapper.id}/`,
                method: 'put',
                data: {
                    id: rapper.id, 
                    main_name: rapper.main_name, 
                    aka_name: rapper.aka_name, 
                    birthday: rapper.birthday,
                    votes: rapper.votes,
                    main_label: rapper.main_label
                }
            }).then(function() {
                rapper.editing = false;
            })
            .catch(function(error) {
                console.log('Rapper Server Error!');
            });
        }
    }
});

const inst = new Vue({
    el: '#app',
    data: {
        rappers: []
    },
    mounted: function() {
        axios.get('http://127.0.0.1:8000/api/artist/musician/')
            .then(function(res) {
                const { data } = res;
                Vue.set(inst, 'rappers', data.map(rapper => {
                    rapper.editing = false;
                    return rapper;
                }));
            })
            .catch(function(error) {
                console.log('Rapper Server Error!');
            });
    }
});