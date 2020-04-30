import Vue from 'vue';
import Vuex from 'vuex';

import events from './modules/events';
import cart from './modules/cart';
import user from './modules/user';
import announcements from './modules/announcements';

Vue.use(Vuex);

export default new Vuex.Store({
  namespaced: true,
  modules: {
    events,
    cart,
    user,
    announcements,
  },
});
