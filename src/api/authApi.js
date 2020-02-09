/* eslint-disable camelcase */
import axiosInstance from '../utils/auth/axios/axiosInstance';
import {
  API_LOGIN, API_SIGNUP, API_REFRESH_TOKEN,
} from './endpoints';

/**
 * MODULE SUMMARY
 * Used as a wrapper around user authentication api calls. Exposes certain functions that can
 * be looked at as routes. These functions should be called in Vuex Modules.
 *
 * One of these files should be made for every group of api calls (e.g. notesApi.js)
 */

function setAccessTokenHeader(access_token) {
  axiosInstance.defaults.headers['X-Access-Token'] = access_token;
}

function setRefreshTokenHeader(refresh_token) {
  axiosInstance.defaults['X-Refresh-Token'] = refresh_token;
}

function deleteAccessTokenHeader() {
  delete axiosInstance.defaults.headers['X-Access-Token'];
}

function deleteRefreshTokenHeader() {
  delete axiosInstance.defaults['X-Refresh-Token'];
}

function login(user) {
  return axiosInstance.post(API_LOGIN, user);
}

function signup(user) {
  return axiosInstance.post(API_SIGNUP, user);
}

function logout(refresh_token) {
  setRefreshTokenHeader(refresh_token);
  return axiosInstance.delete(API_LOGIN);
}

function refresh(refresh_token) {
  setRefreshTokenHeader(refresh_token);
  return axiosInstance.post(API_REFRESH_TOKEN);
}


export default {
  login,
  signup,
  logout,
  refresh,
  setAccessTokenHeader,
  setRefreshTokenHeader,
  deleteAccessTokenHeader,
  deleteRefreshTokenHeader,
};
