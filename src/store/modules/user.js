import userState from '../../utils/auth/state/userState';

export default {
  namespaced: true,
  state: {
    isSignedIn: false,
    adminLevel: -1,
    accountStatus: '',
    userId: -1,
  },
  getters: {
  },
  mutations: {
    setUser(state) {
      state.isSignedIn = userState.getIsSignedIn();
      state.adminLevel = userState.getUserAdminLevel();
      state.accountStatus = userState.getUserAccountStatus();
      state.userId = userState.getUserId();
    },
  },
  actions: {
  },
};
