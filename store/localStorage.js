export const state = () => ({
  isAuth: false,
  token: null,
});
export const mutations = {
  SET_AUTH(state, payload) {
    state.isAuth = payload;
  },
  SET_TOKEN(state, payload) {
    state.token = payload;
  },
  CLEAR_STATE(state, payload) {
    state.isAuth = payload.isAuth;
    state.token = payload.token;
  },
};
export const getters = {
  isAuthenticated: (state) => {
    return state.isAuth;
  },
  getToken: (state) => {
    return state.token;
  },
};
