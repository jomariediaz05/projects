import store from '../store';
import axios from 'axios';
import * as authService from './auth-service';

export function http() {
    return axios.create({
        baseURL: store.state.apiUrl,
        headers: {
            Authorization: authService.getToken()
        }
    });
}