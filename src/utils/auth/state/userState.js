import tokenService from '../tokenService';
import jwtUtils from '../jwtUtils';

/**
 * MODULE SUMMARY
 * Singleton pattern javascript module used to record and calculate the state of the user.
 *
 * Integer getters for priviledge level and account status will return -1 if they cannot be found.
 */
class UserState {
  isSignedin;

  constructor() {
    this.isSignedin = false;
  }

  /**
   * Logs the user in with the given a refresh and access token.
   */
  login(accessToken, refreshToken) {
    this.isSignedin = true;
    tokenService.setAccessToken(accessToken);
    tokenService.setRefreshToken(refreshToken);
  }

  /**
   * Changes state and removes tokens.
   */
  logout() {
    this.isSignedin = false;
    tokenService.removeAccessToken();
    tokenService.removeRefreshToken();
  }

  /**
   * Will return true if the access token exists and
   * the internal state indicates the user has signed in success.
   */
  getIsSignedIn() {
    return this.isSignedin && (tokenService.getAccessToken !== null);
  }

  /**
   * Will retrieve the current user's admin level as specfied in the access token.
   */
  getUserAdminLevel() {
    if (this.getIsSignedIn()) {
      const payload = jwtUtils.getTokenPayload(tokenService.getAccessToken());
      if (payload !== null) {
        return payload.adminLevel;
      }
    }
    return -1;
  }

  /**
   * Will retrieve the current user's accountStatus as specified in the access token.
   */
  getUserAccountStatus() {
    if (this.getIsSignedIn()) {
      const payload = jwtUtils.getTokenPayload(tokenService.getAccessToken());
      if (payload !== null) {
        return payload.accountStatus;
      }
    }
    return -1;
  }

  /**
  * Will retrieve the current user's userId as specified in the access token.
  */
  getUserId() {
    if (this.getIsSignedIn()) {
      const payload = jwtUtils.getTokenPayload(tokenService.getAccessToken());
      if (payload !== null) {
        return payload.userId;
      }
    }
    return -1;
  }
}

const userState = new UserState();

export default userState;
