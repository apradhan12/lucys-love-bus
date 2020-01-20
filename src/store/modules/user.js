/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
import jwtUtils from '../../utils/auth/jwtUtils';
import tokenService from '../../utils/auth/tokenService';
import userApi from '../../api/userApi';

const state = {
};

const getters = {
};

const mutations = {
};

const actions = {
  /**
   * Called in Loginform.vue
   * Used to login the user and retrieve access & refresh tokens.
   * @param {*} context required vuex actions parameter.
   * @param {*} user object containing {username, password, rememberMe} properties.
   */
  async login(context, user) {
    try {
      const response = await userApi.login(user);
      if (response.status === 201) {
        tokenService.setAccessToken(response.data.access_token);
        tokenService.setRefreshToken(response.data.refresh_token);
        userApi.setAccessTokenHeader(response.data.access_token);
        context.dispatch('getUser');
      } else {
        throw new Error(`Login failed with response status ${response.status}`);
      }
    } catch (error) {
      throw error;
    }
  },
  /**
   * Called in Signupform.vue
   * Used to sign a user up and retrieve access & refresh tokens.
   * @param {*} context required vuex actions parameter.
   * @param {*} user object containing {username, password, email} properties.
   */
  async signup(context, user) {
    try {
      const response = await userApi.signup(user);
      if (response.status === 201) {
        tokenService.setAccessToken(response.data.access_token);
        tokenService.setRefreshToken(response.data.refresh_token);
        userApi.setAccessTokenHeader(response.data.access_token);
      } else {
        throw new Error(`Signup failed with response status ${response.status}`);
      }
    } catch (error) {
      throw error;
    }
  },
  /**
   * Called in TheNavigation.vue
   * used to logout a user. Sends access & refresh tokens to backend for invalidation.
   * @param {*} context required vuex actions parameter.
   */
  async logout(context) {
    try {
      context.commit('logout');
      const response = await userApi.logout(tokenService.getAccessToken(),
        tokenService.getRefreshToken());
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
        const { data } = await userApi.refresh(refresh);
        tokenService.setAccessToken(data.access_token);
        userApi.setAccessTokenHeader(data.access_token);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
      }
    }
  },
  /**
   * BUM FUNCTION USED FOR TESTING! DOESN"T DO ANYTHING YET.
   */
  async getUser() {
    try {
      await userApi.getUser();
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Could not retrieve user');
    }
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
