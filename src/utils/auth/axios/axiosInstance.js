/* eslint-disable camelcase */
/* eslint-disable no-param-reassign */
/* eslint-disable arrow-parens */
/* eslint-disable no-unused-vars */
import axios from 'axios';
import {
  API_DOMAIN,
} from '../../../api/endpoints';
// eslint-disable-next-line import/no-cycle
import { refreshToken, createRequestInterceptor, createResponseInterceptor } from './axiosUtils';

/** MODULE SUMMARY:
 * This is used to construct two global axios instances that should be used for all api calls.
 * - publicResourceAxios is used for login.
 * - protectedResourceAxios is used for everything else. It includes interceptor functionality.
 * These instances should ONLY be used in the src/api folder.
 */

const protectedResourceAxios = axios.create({
  baseURL: API_DOMAIN,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

const publicResourceAxios = axios.create({
  baseURL: API_DOMAIN,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// initialization
createRequestInterceptor(protectedResourceAxios);
createResponseInterceptor(protectedResourceAxios, refreshToken);

export { publicResourceAxios, protectedResourceAxios };
