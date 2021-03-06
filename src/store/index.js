import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from "vuex-persistedstate";

import app from './modules/app';
import auth from './modules/auth';

import * as getters from './getters';

Vue.use(Vuex);

const store = new Vuex.Store({
  strict: false,  // process.env.NODE_ENV !== 'production',
  getters,
  modules: {
    app,
    auth
  },
  state: {},
  mutations: {},
  plugins: [createPersistedState()]
})

export default store