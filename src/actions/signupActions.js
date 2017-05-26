import axios from 'axios';

export function userSignupRequest(userData) {
    return dispatch => {
        return axios({
            method: 'post',
            url: 'http://localhost:5000/api/users',
            responseType:'json',
            data: userData
        })
    }
}
