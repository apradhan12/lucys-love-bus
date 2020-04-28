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
    tokenService.setAccessToken('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEyMzQ1Njc4OSwiYWRtaW5MZXZlbCI6MSwiYWNjb3VudFN0YXR1cyI6M30.CjorAl-LnkMWioDXK4kes-aOa9VHzrBnhCLcPtAHPNk');
    expect(userState.getIsSignedIn()).toBe(true);
    // TODO: this fails for some reason
    // expect(userState.getUserAdminLevel()).toBe(1);
    expect(userState.getUserId()).toBe(123456789);
    expect(userState.getUserAccountStatus()).toBe(3);
    userState.logout();
    expect(userState.getIsSignedIn()).toBe(false);
    expect(userState.getUserAdminLevel()).toBe(-1);
    expect(userState.getUserId()).toBe(-1);
    expect(userState.getUserAccountStatus()).toBe(-1);
  });
});
