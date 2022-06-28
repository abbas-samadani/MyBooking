import axios from 'axios';

const axiosConfig = axios.create({

    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
    },
    withCredentials: true
})

export default axiosConfig;