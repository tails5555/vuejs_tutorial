import axios from 'axios';

const ROOT_URL = 'http://localhost:8000/api/artist';

const fetch_label_list = () => axios(`${ROOT_URL}/label`).then(response => response.data).catch(error => error.response);

const fetch_label_element = (pk) => axios(`${ROOT_URL}/label/${pk}`).then(response => response.data).catch(error => error.response);

const fetch_artist_list = () => axios(`${ROOT_URL}/musician`).then(response => response.data).catch(error => error.response);

const fetch_artist_element = (pk) => axios(`${ROOT_URL}/musician/${pk}`).then(response => response.data).catch(error => error.response);

const fetch_profile_list = () => axios(`${ROOT_URL}/profile`).then(response => response.data).catch(error => error.response);

const fetch_profile_element = (pk) => axios(`${ROOT_URL}/profile/${pk}`).then(response => response.data).catch(error => error.message);