/* eslint-disable camelcase */
/* eslint-disable no-param-reassign */
/* eslint-disable arrow-parens */
/* eslint-disable no-unused-vars */
import tokenService from '../tokenService';

const INVALID_ACCESS_TOKEN = 'Given access token is expired or invalid';

/**
 * An array containing the list of http status codes where the axios interceptor
 * will be called.
 */
const refreshStatusCodes = [
  401, // unauthorized
];

/**
 * The function that will be passed into createInterceptor as an argument.
 * @param {*} pastRequest that latest failed request that resulted in a response code
 * contained in refreshStatusCodes.
 */
export async function refreshToken(instance, pastRequest) {
  // TODO:
  // This is the code that is logically creating the dependency cycle
  // authApi.refresh uses the protectedResourceAxios, which contains a response interceptor that
  // calls this function, which calls authApi.refresh.... ad absurdum

  // const refresh_token = tokenService.getRefreshToken();
  // try {
  //   const { data } = await authApi.refresh(refresh_token);
  //   tokenService.setAccessToken(data.access_token);
  //   pastRequest.response.config.headers['X-Access-Token'] = data.access_token;
  //   return Promise.resolve();
  // } catch (error) {
  //   userState.logout();
  //   throw new Error('Original request failed. Refresh attempted and failed');
  // }
}

/**
 * Creates request interceptor for outgoing requests.
 * Ensures that the request has the latest available access_token.
 */
export function createRequestInterceptor(instance) {
  instance.interceptors.request.use(request => {
    request.headers['X-Access-Token'] = tokenService.getAccessToken();
    return request;
  });
}
/**
 * Interceptor for request responses. COMPLICATED AND REQUIRES TESTING.
 * All JWT refresh logic is encapsulated here.
 * If a request fails and is unauthorized, the interceptor first 'ejects' itself
 * (to avoid an infinite loop), and then the interceptor will attempt to obtain a new
 * access token using the argument (a function) onRefresh.
 *
 * Then we await the fulfillment of the refreshCall.
 *
 * - if it succeeds then redo the failed request.
 *
 * - if an error is thrown (or promise is rejected) we then enter the catch branch.
 *
 * - FINALLY BLOCK IS VERY IMPORTANT.
 * - Recursive call ensures we revert to the default interceptor.
 *
 * TODO: forced logout if rerequest fails. Add 3rd interceptor.
 * @param {*} instance instance of axios to include interceptor.
 * @param {*} onRefresh function to be called on failed request.
 */
export function createResponseInterceptor(instance, onRefresh) {
  const interceptorID = instance.interceptors.response.use(
    response => response,
    async (error) => {
      if (error.response
        // ensure it is the correct error code.
        && refreshStatusCodes.includes(error.response.status)
        // ensure it only occurs when specified String is received in body
        && error.response.data === INVALID_ACCESS_TOKEN) {
        instance.interceptors.response.eject(interceptorID);
        try {
          // attempt to refresh token
          await onRefresh(instance, error);
          return instance(error.response.config);
        } catch (failedRefresh) {
          return Promise.reject(failedRefresh);
        } finally {
          createResponseInterceptor(instance, onRefresh);
        }
      }
      return Promise.reject(error);
    },
  );
  return instance;
}
