/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
import jwtUtils from '../../utils/auth/jwtUtils';
import authApi from '../../api/authApi';
import userState from '../../utils/auth/state/userState';
import tokenService from '../../utils/auth/tokenService';

const state = {
};

const getters = {
};

const mutations = {
};

const actions = {
  /**
   * Called in Login.vue
   * Used to login the user and retrieve access & refresh tokens.
   * @param {*} context required vuex actions parameter.
   * @param {*} user object containing {username, password, rememberMe} properties.
   */
  async login(context, user) {
    try {
      const response = await authApi.login(user);
      if (response.status === 201) {
        userState.login(response.data.accessToken, response.data.refreshToken);
      } else {
        const error = new Error(`Login failed with response status ${response.status}`);
        error.code = response.status;
        throw error;
      }
    } catch (error) {
      throw error;
    }
  },
  /**
   * Called in SignUp.vue
   * Used to sign a user up and retrieve access & refresh tokens.
   * @param {*} context required vuex actions parameter.
   * @param {*} user object containing {username, password, email} properties.
   */
  async signup(context, user) {
    try {
      const response = await authApi.signup(user);
      if (response.status === 201) {
        userState.login(response.data.accessToken, response.data.refreshToken);
      } else {
        const error = new Error(`Signup failed with response status ${response.status}`);
        error.code = response.status;
        throw error;
      }
    } catch (error) {
      throw error;
    }
  },
  /**
   * Called in TheNavigation.vue
   * Used to logout the current user. Sends access & refresh tokens to backend for invalidation.
   * Removes access and refresh token headers from axios.
   * Calls logout from userState Singleton.
   * @param {*} context required vuex actions parameter.
   */
  async logout(context) {
    try {
      context.commit('logout');
      const response = await authApi.logout(tokenService.getRefreshToken());
      authApi.deleteAccessTokenHeader();
      authApi.deleteRefreshTokenHeader();
      userState.logout();
      if (response.status !== 204) {
        throw new Error(`Logout failed with response status ${response.status}`);
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  },
  /**
   * Used in App.vue beforeCreate lifecycle hook. Used to persist the user without
   * having them login again.
   * @param {*} context required vuex actions parameter.
   */
  async persistUser(context) {
    const access = tokenService.getAccessToken();
    const refresh = tokenService.getRefreshToken();

    if (!jwtUtils.isJWTValid(access) && jwtUtils.isJWTValid(refresh)) {
      try {
        const { data } = await authApi.refresh(refresh);
        tokenService.setAccessToken(data.accessToken);
        authApi.setAccessTokenHeader(data.accessToken);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
      }
    }
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
