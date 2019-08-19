import store from '../store';

export function isLoggedIn() {
    const token = localStorage.getItem('token');
    return token !== null;
}

export function login() {
    const token = {
        username: 'jomarie'
    };

    setToken(token);
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