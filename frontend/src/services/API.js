import axios from 'axios';

const API = axios.create ({
    baseURL: "https://air-ibm.herokuapp.com/"
});

export default API;