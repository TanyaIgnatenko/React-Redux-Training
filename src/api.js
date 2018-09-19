import axios from 'axios';
import {API_URL} from 'src/config';

export default axios.create({
    baseURL: API_URL
});

// function post(path, payload) {
//     return axios
//         .get(`${API_URL}${path}`)
//         .then(response => response.data);
// }
//
// function get(path) {
//     return axios
//         .get(`${API_URL}${path}`)
//         .then(response => response.data);
// }
//
// export {
//     post,
//     get
// };
