import axios from 'axios';

const ROOT_URL = 'http://127.0.0.1:8000/api/music';

const fetch_lyric_list = () => axios(`${ROOT_URL}/lyric`).then(response => response.data).catch(error => error.response);

const fetch_lyric_element = (pk) => axios(`${ROOT_URL}/lyric/${pk}`).then(response => response.data).catch(error => error.response);