import axios from 'axios';

export default function setupAxiosConfig() {
    axios.defaults.baseURL = 'https://the-market.se01.tech/'
}
