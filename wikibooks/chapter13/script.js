// 음악 REST API 사이트
const BASE_URL = 'http://localhost:8000/api/song';

// 모든 음악 조회 API
const all_musics_api = () => axios.get(`${BASE_URL}/music_page/`);

// 음악 공감 1 올리기 API
const push_heart_by_music_api = (id) => axios({
    url: `${BASE_URL}/music_page/give_heart/?id=${id}`,
    method: 'put'
});

// 모든 장르 가져오는 API
const all_genres_api = () => axios.get(`${BASE_URL}/genre/`);

// Music 컴포넌트 생성
Vue.component('music', {
    template: '#music-template',
    props: ['music'],
    methods: {
        plus_heart: function(music) {
            push_heart_by_music_api(music.id)
                .then(function(res) {
                    const { data } = res;
                    const { hearts } = data.fields;
                    music.hearts = hearts;
                })
                .catch(function(error) {
                    console.log('Music Server Error!');
                });
        }
    }
});

const inst = new Vue({
    el: '#app',
    data: {
        musics: [], genres: [], 
        page_req: {
            next: null, prev: null, count: 0, pg: 1
        },
        search_req: {
            genre: 0, ob: '0', st: ''
        }
    },
    methods: {
        fetch_musics: function(page_url) {
            const vm = this;
            page_url = page_url || `${BASE_URL}/music_page/?pg=1`;
            axios.get(page_url)
                .then(res => {
                    const { data } = res;

                    vm.set_music_list(data);
                    vm.set_paginate(data);
                }).catch(function(error) {
                    console.log('Music Server Error!');
                }); 
        },
        search_musics: function() {
            const vm = this;
            const { search_req } = this;
            
            const query_model = {};
            if(search_req.st.trim() !== '') {
                Object.assign(query_model, { search : search_req.st });
            }

            switch(search_req.ob) {
                case '1' :
                    Object.assign(query_model, { ordering : 'title' });
                    break;
                case '2' :
                    Object.assign(query_model, { ordering : '-title' });
                    break;
                case '3' :
                    Object.assign(query_model, { ordering : 'hearts' });
                    break;
                case '4' :
                    Object.assign(query_model, { ordering : '-hearts' });
                    break;
                case '5' :
                    Object.assign(query_model, { ordering : 'year' });
                    break;
                case '6' :
                    Object.assign(query_model, { ordering : '-year' });
                    break;
            }

            if(search_req.genre !== 0) {
                Object.assign(query_model, { genre : search_req.genre });
            }
            
            const page_url = `${BASE_URL}/music_page/?pg=1&${ simpleQueryString.stringify(query_model) }`;
            this.fetch_musics(page_url);
        },
        set_paginate: function(data) {
            const music_cnts = data && data.count;
            const music_next = data && data.next;
            const music_prev = data && data.previous;
            
            const prev_query = simpleQueryString.parse(music_prev);
            const next_query = simpleQueryString.parse(music_next);

            const prev_page = prev_query && (parseInt(prev_query.page) || 0);
            const next_page = next_query && (parseInt(next_query.page) || 0);

            let pg = 0;
            if(prev_page > 0 && next_page > 0) { // 중앙 페이지 (2페이지 제외.)
                pg = (prev_page + next_page) / 2;
            } else if(next_page === 0) { // 마지막 페이지
                pg = prev_page + 1;
            } else if(prev_page === 0 && next_page === 3) { // 2페이지. 이전의 1페이지 체크가 없음.
                pg = 2;
            } else { // 1페이지.
                pg = 1;
            }

            Vue.set(inst, 'page_req', {
                next: music_next, prev: music_prev, count: music_cnts, pg: pg
            });
        },
        set_music_list: function(data) {
            const music_data = data && data.results;

            Vue.set(inst, 'musics', music_data);
        },
        initialize_search: function() {
            this.search_req = {
                genre: 0, ob: '0', st: ''
            };
            this.fetch_musics(`${BASE_URL}/music_page/?pg=1`);
        }
    },
    mounted: function() {
        const vm = this;
        axios.all(
            [ all_musics_api(), all_genres_api() ]
        ).then(
            axios.spread((music_res, genre_res) => {
                const { data } = music_res;
                
                vm.set_music_list(data);
                vm.set_paginate(data);

                const genre_data = genre_res && genre_res.data;
                Vue.set(inst, 'genres', genre_data);
            })
        ).catch(function(error) {
            console.log('Music Or Genre Server Error!');
        }); 
    },
    computed: {
        hasInputed: function() {
            const { search_req } = this;
            if(search_req.st.trim() !== '') return true;
            else {
                if(search_req.ob !== '0') return true;
                else if(search_req.genre > 0) return true;
                else return false;
            }
        }
    }
});