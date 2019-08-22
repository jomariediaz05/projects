import Vue from 'vue';
import Vuex from 'vuex';
import * as auth from './services/auth-service';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoggedIn: false,
    apiUrl: `${window.location.protocol}//${window.location.hostname}:3000/api`,
    user: {
      id: null,
      name: null
    }
  },
  mutations: {
    authenticate: (state) => {
      state.isLoggedIn = auth.isLoggedIn();

      if (state.isLoggedIn) {
        state.user.name = auth.getUserName();
        state.user.id = auth.getUserId();
      } else {
        state.user = {
          id: null,
          name: null
        };
      }
    }
  },
  actions: {
    authenticate: ({
      commit
    }) => {
      commit('authenticate');
    }
  }
})