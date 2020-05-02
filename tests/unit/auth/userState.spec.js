/* eslint-disable no-unused-expressions */
import userState from '../../../src/utils/auth/state/userState';
import tokenService from '../../../src/utils/auth/tokenService';

beforeEach(() => {
  localStorage.clear();
  userState.logout;
});

describe('Tests for userState singleton module', () => {
  test('Test default behavior', () => {
    expect(userState.getIsSignedIn()).toBe(false);
    expect(userState.getUserAdminLevel()).toBe(-1);
    expect(userState.getUserId()).toBe(-1);
    expect(userState.getUserAccountStatus()).toBe(-1);
  });
  test('Test behavior after login and after logout', () => {
    userState.login('token', 'token2');
    // jwt configured on jwt.io
    tokenService.setAccessToken('eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJwcml2aWxlZ2VMZXZlbCI6MSwiaXNzIjoiYzRjIiwiZXhwIjoxNTg4MTkxMjg3LCJ1c2VySWQiOjN9.kbn3T4JsidnA96uSoYQNP1EVBdjuYDBaHpmw-uGCRWE');
    expect(userState.getIsSignedIn()).toBe(true);
    expect(userState.getUserAdminLevel()).toBe(1);
    expect(userState.getUserId()).toBe(3);
    // expect(userState.getUserAccountStatus()).toBe(3); don't think this exists anymore
    userState.logout();
    expect(userState.getIsSignedIn()).toBe(false);
    expect(userState.getUserAdminLevel()).toBe(-1);
    expect(userState.getUserId()).toBe(-1);
    expect(userState.getUserAccountStatus()).toBe(-1);
  });
});
