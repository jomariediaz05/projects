import store from '../store';
import {
    http
} from './http-service';

export function isLoggedIn() {
    const token = localStorage.getItem('token');
    return token !== null;
}

export function login(user) {
    return http().post('/auth', user)
        .then(res => {
            if (res) {
                const fakeToken = {
                    token: 'my-token'
                };

                setToken(fakeToken);
            }
        });
}

export function setToken(token) {
    localStorage.setItem('token', JSON.stringify(token));
    store.dispatch('authenticate');
}

export function getUserName() {
    return 'jomarie';
}

export function getUserId() {
    return 1;
}

export function registerUser(user) {
    return http().post('/register', user);
}