Vue.component('rapper', {
    template: '#rapper-template',
    props: ['rapper'],
    data: function() { 
        return {
            image_url: '#',
            own_label: '무소속'
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
                inst.rappers = data;
            })
            .catch(function(error) {
                console.log('Rapper Server Error!');
            });
    }
});