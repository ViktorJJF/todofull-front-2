import api from "@/services/api/auth";
// import apiUsers from "@/services/api/users";
import { buildSuccess, handleError } from "@/utils/utils.js";
import router from "@/router";

const state = () => ({
  user: JSON.parse(localStorage.getItem('user')),
  token: !!localStorage.getItem("token") || null,
  isTokenSet: !!localStorage.getItem("token"),
});

const getters = {
  user: (state) =>
    state.user ? state.user.first_name + " " + state.user.last_name : " ",
  token: (state) => (state.user ? state.user.token : " "),
  isTokenSet: (state) => state.isTokenSet,
};
const actions = {
  initialLoad({ commit }) {
    // @ts-ignore
    if (process.browser) {
      commit("initialLoad");
    }
  },
  login({ commit }, { email, password }) {
    return new Promise((resolve, reject) => {
      commit("loadingModule/showLoading", true, { root: true });
      api
        .login(email, password)
        .then((response) => {
          if (response.status === 200) {
            localStorage.setItem("user", JSON.stringify(response.data.user));
            localStorage.setItem("token", response.data.token);
            commit("saveUser", response.data.user);
            commit("saveToken", response.data.token);
            buildSuccess("Bienvenido");
            resolve(null);
          }
        })
        .catch((error) => {
          handleError(error, commit, reject);
        });
    });
  },
  refreshToken({ commit }) {
    return new Promise((resolve, reject) => {
      api
        .refreshToken()
        .then((response) => {
          if (response.status === 200) {
            window.localStorage.setItem(
              "token",
              JSON.stringify(response.data.token)
            );
            commit("saveToken", response.data.token);
            resolve(null);
          }
        })
        .catch((error) => {
          handleError(error, commit, reject);
        });
    });
  },
  autoLogin({ commit }) {
    const user = JSON.parse(localStorage.getItem("user"));
    commit("saveUser", user);
    commit("saveToken", localStorage.getItem("token"));
  },
  logout({ commit }) {
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("tokenExpiration");
    window.localStorage.removeItem("user");
    router.push({ name: "login" });
    commit("logout");
  },
};
const mutations = {
  saveToken(state, token) {
    state.token = token;
    state.isTokenSet = true;
  },
  logout(state) {
    state.user = null;
    state.token = null;
    state.isTokenSet = false;
  },
  saveUser(state, user) {
    state.user = user;
  },
};

const namespaced = true;

export default { getters, actions, mutations, state, namespaced };
