import axios from 'axios';

export function userSignupRequest(userData) {
    console.log('I am in Action');
    return dispatch => {
        return axios.post('http://localhost:5000/api/users', userData)
        return axios({
            method: 'post',
            url: 'http://localhost:5000/api/users',
            responseType:'json',
            data: userData
        })
    }
}
