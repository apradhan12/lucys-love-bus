import tokenService from '../tokenService';
import jwtUtils from '../jwtUtils';
import userApi from '../../../api/userApi';

/**
 * MODULE SUMMARY
 * Singleton pattern javascript module used to record and calculate the state of the user.
 *
 * Integer getters for priviledge level and account status will return -1 if they cannot be found.
 */
const userState = (() => {
  let isSignedin = false;

  function login() {
    isSignedin = true;
  }
  function logout() {
    isSignedin = false;
    tokenService.removeAccessToken();
    tokenService.removeRefreshToken();
    userApi.deleteAccessTokenHeader(); // I'm not sure this is necessary.
  }

  function getIsSignedin() {
    return isSignedin && (tokenService.getAccessToken !== null);
  }

  function getUserAdminLevel() {
    if (getIsSignedin()) {
      const payload = jwtUtils.getTokenPayload(tokenService.getAccessToken);
      if (payload !== null) {
        return payload.adminLevel;
      }
    }
    return -1;
  }

  function getUserAccountStatus() {
    if (getIsSignedin()) {
      const payload = jwtUtils.getTokenPayload(tokenService.getAccessToken);
      if (payload !== null) {
        return payload.accountStatus;
      }
    }
    return -1;
  }

  return {
    login: login(),
    logout: logout(),
    getIsSignedin: getIsSignedin(),
    getUserAdminLevel: getUserAdminLevel(),
    getUserAccountStatus: getUserAccountStatus(),
  };
});

export default userState;
