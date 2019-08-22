import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://myburger-reactapp1.firebaseio.com/'
});

export default instance;