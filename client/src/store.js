import Vue from "vue";
import Vuex from "vuex";
import AuthenticationService from "@/services/AuthenticationService";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    isLoggedIn: false
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setLoggedIn(state, val) {
      state.isLoggedIn = val;
    }
  },
  actions: {
    setUser({ commit }) {
      var user = {};
      if (AuthenticationService.isLoggedIn()) {
        user.utorid = AuthenticationService.getUtorid();
        user.id = AuthenticationService.getUserId();
        commit("setUser", user);
        commit("setLoggedIn", true);
      } else {
        user.utorid = null;
        user.id = null;
        commit("setUser", user);
        commit("setLoggedIn", false);
      }
    },
    loggedOut({commit}){
      var user = {};
      Vue.$cookies.remove('utorid');
      user.id = null;
      user.utorid = null;
      commit("setUser",user);
      commit("setLoggedIn",false)
    }
  }
});