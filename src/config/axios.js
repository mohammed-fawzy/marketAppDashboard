import axios from 'axios';
import store from '../store/index';

axios.defaults.baseURL = 'https://the-market.se01.tech/'

function getHeaders() {
    const authUser = store.getters["isAuthenticated"];
    const admin = store.getters["StateUser"]
    const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Content-Language': 'en'
    }
    if (authUser) {
        headers['Authorization'] = `bearer ${admin.token}`;
    }

    return headers;
}

axios.interceptors.request.use((config) => {
    // set Headers
    config.headers = getHeaders();

    return config;
},
(error) => {
    // store.commit('main/addErr', error.toString());
    return Promise.reject(error);
});
