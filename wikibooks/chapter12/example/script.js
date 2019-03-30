// 이전 예제와 달리 form_data 데이터를 추가하여 수정 취소 이후에 원래 데이터를 소유할 수 있도록 재구성했습니다.

// 음악 REST API 사이트
const BASE_URL = 'http://localhost:8000/api/song';

// 모든 음악 조회 API
const all_musics_api = () => axios.get(`${BASE_URL}/music/`);

// 새 음악 추가 API
const create_music_api = (data) => axios({
    url: `${BASE_URL}/music/`,
    method: 'post',
    data
});

// 음악 정보 변경 API
const update_music_api = (id, data) => axios({
    url: `${BASE_URL}/music/${id}/`,
    method: 'put',
    data: {
        id: id, 
        title: data.title,
        singer: data.singer,
        year: data.year,
        genre: data.genre, 
        hearts: data.hearts
    }
});

// 한 음악 삭제 API
const delete_music_api = (id) => axios({
    url: `${BASE_URL}/music/${id}/`,
    method: 'delete'
});

// 음악 공감 1 올리기 API
const push_heart_by_music_api = (id) => axios({
    url: `${BASE_URL}/music/give_heart/?id=${id}`,
    method: 'put'
});

// 모든 장르 가져오는 API
const all_genres_api = () => axios.get(`${BASE_URL}/genre/`);

// Music 컴포넌트 생성
Vue.component('music', {
    template: '#music-template',
    props: ['music', 'genres'], // 부모 데이터에서 단일 음악과 복수 장르들을 가져옵니다.
    data: function() { // form-data 는 음악 수정 시에 필요한 객체 데이터
        return {
            form_data: {
                title: '',
                singer: '',
                year: 0,
                genre: null,
                hearts: 0,
            }
        }
    },
    methods: {
        plus_heart: function(music) { // 공감 메소드
            push_heart_by_music_api(music.id)
                .then(function(res) {
                    const { data } = res;
                    const { hearts } = data.fields;
                    music.hearts = hearts;
                })
                .catch(function(error) {
                    console.log('Music Server Error!');
                });
        },
        editing_music: function(music) { // 수정 이전 메소드
            music.editing = true;
            this.form_data = {
                title: music.title,
                singer: music.singer,
                year: music.year,
                genre: music.genre,
                hearts: music.hearts,
            }
        },
        update_music: function(music) { // 쥔쫘 수정 메소드
            update_music_api(music.id, this.form_data)
                .then(function(res) {
                    const { data } = res;
                    music.id = data.id;
                    music.title = data.title;
                    music.singer = data.singer;
                    music.year = data.year;
                    music.genre = data.genre;
                    music.editing = false;
                })
                .catch(function(error) {
                    console.log('Music Server Error!');
                });
                
            this.initialize_form_data();
        },
        closing_update: function(music) { // 수정 취소 메소드
            music.editing = false
            this.initialize_form_data();
        },
        delete_music: function(music) { // 삭제 메소드
            const conf = window.confirm(`${music.title} 음악을 삭제합니다. 계속 하시겠습니까?`);
            if(conf) {
                const idx = this.$parent.musics.indexOf(music);
                this.$parent.musics.splice(idx, 1);

                delete_music_api(music.id)
                    .catch(function(error) {
                        console.log('Music Server Error!');
                    });
            }
        },
        initialize_form_data : function() { // form_data 초기화
            this.form_data = {
                title: '',
                singer: '',
                year: 0,
                genre: null,
                hearts: 0,
            }
        }
    }
});

const inst = new Vue({
    el: '#app',
    data: {
        musics: [], genres: [], 
        form_data: { // 음악 추가를 위한 form data 데이터 객체
            title: '',
            singer: '',
            year: 0,
            genre: null,
            hearts: 0,
            creating: false,
        }
    },
    methods: {
        add_music: function() { // 음악 추가 이전 메소드
            const { form_data } = this;
            form_data.creating = true;
        },
        closing_create: function() { // 음악 추가 취소
            this.initialize_form_data();
        },
        create_music: function(){ // 쥔쫘 음악 추가
            const { form_data, musics } = this;

            create_music_api(form_data).then(function(res){
                const { data } = res;
                form_data.creating = false;
                data.editing = false;
                
                const tmp_musics = musics.slice();
                tmp_musics.push(data);
                Vue.set(inst, 'musics', tmp_musics);
            }).catch(function(error) {
                console.log('Music Server Error!');
            }); 

            this.initialize_form_data();
        },
        initialize_form_data : function() { // form_data 초기화
            this.form_data = {
                title: '',
                singer: '',
                year: 0,
                genre: null,
                hearts: 0,
                creating: false,
            }
        }
    },
    mounted: function() { // 처음에 모든 음악과 장르들을 가져오고 렌더링합니다.
        axios.all(
            [ all_musics_api(), all_genres_api() ]
        ).then(
            axios.spread((music_res, genre_res) => {
                const music_data = music_res && music_res.data;
                Vue.set(inst, 'musics', music_data.map(music => {
                    music.editing = false;
                    return music;
                }));

                const genre_data = genre_res && genre_res.data;
                Vue.set(inst, 'genres', genre_data);
            })
        ).catch(function(error) {
            console.log('Music Or Genre Server Error!');
        }); 
    }
});