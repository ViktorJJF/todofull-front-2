import api from "@/services/api/auth";
// import apiUsers from "@/services/api/users";
import { buildSuccess, handleError } from "@/utils/utils.js";
import router from "@/router";

const state = () => ({
  user: JSON.parse(localStorage.getItem('user')),
  companies: [],
  selectedCompany: null,
  token: !!localStorage.getItem("token") || null,
  isTokenSet: !!localStorage.getItem("token"),
});

const getters = {
  user: (state) =>
    state.user ? state.user.first_name + " " + state.user.last_name : " ",
  token: (state) => (state.user ? state.user.token : " "),
  isTokenSet: (state) => state.isTokenSet,
  getCurrentCompany: (state) => state.selectedCompany,
};
const actions = {
  initialLoad({ commit }) {
    // @ts-ignore
    if (process.browser) {
      commit("initialLoad");
    }
  },
  login({ commit }, { corporation, user: { email, password } }) {
    return new Promise((resolve, reject) => {
      commit("loadingModule/showLoading", true, { root: true });
      api
        .login(email, password, corporation)
        .then((response) => {
          if (response.status === 200) {
            localStorage.setItem("user", JSON.stringify(response.data.user));
            localStorage.setItem("token", response.data.token);
            commit("saveUser", response.data.user);
            commit("saveToken", response.data.token);
            const index = response.data.user.corporation.companies.findIndex(c => c.default === true);
            commit("setCompanies", response.data.user.corporation.companies)
            if (index >= 0) {
              commit("setCurrentCompany", response.data.user.corporation.companies[index].company._id);
            }
            console.log("setCompanies 1", response.data.user.corporation.companies);
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
    commit("setCompanies", user.companies)
  },
  setCompanies({ commit }, companies) {
    commit("setCompanies", companies)
  },
  setCurrentCompany({ commit }, id) {
    commit("setCurrentCompany", id);
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
  setCurrentCompany(state, id) {
    const index = state.companies.findIndex(c => c.company._id === id);
    state.selectedCompany = state.companies[index];
    localStorage.setItem("selectedCompany", JSON.stringify(state.selectedCompany));
  },
  setCompanies(state, companies) {
    state.companies = companies;
  },
  saveUser(state, user) {
    state.user = user;
  },
};

const namespaced = true;

export default { getters, actions, mutations, state, namespaced };
