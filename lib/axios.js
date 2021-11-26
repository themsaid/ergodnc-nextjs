import axios from 'axios';

export default axios.create({
    baseURL: 'http://api.ergodnc.test',
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
    },
    withCredentials: true,
});