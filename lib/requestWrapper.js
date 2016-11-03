/**
 * Wrapper functions for each of the request verbs.
 */
const rp = require('request-promise');

module.exports = {
  /**
   * Wrapper around request-promise-native package for GET requests.
   *
   * @param {string} resource - The Refocus API endpoint for the resource
   *  requested.
   * @returns {Promise} A promise which resolves to the object or array
   *  requested.
   */
  get: (token, resource) => {
    const opts = {
      headers: {
        Authorization: token,
      },
      json: true,
      resolveWithFullResponse: false,
      simple: false,
      uri: resource,
    };

    return new Promise((resolve, reject) => {
      rp.get(opts)
      .then(resolve)
      .catch(reject);
    });
  }, // get

  /**
   * Wrapper around request-promise-native package for POST requests.
   *
   * @param {string} resource - The Refocus API endpoint for the resource being
   *  created.
   * @param {object} payload - The payload for the HTTP POST request.
   * @returns {Promise} A promise which resolves to the resource created.
   */
  post: (token, resource, payload) => {
    const opts = {
      body: payload,
      headers: {
        Authorization: token,
      },
      json: true,
      resolveWithFullResponse: false,
      simple: false,
      uri: resource,
    };

    return new Promise((resolve, reject) => {
      rp.post(opts)
      .then(resolve)
      .catch(reject);
    });
  }, // post

  /**
   * Wrapper around request-promise-native package for POST requests.
   *
   * @param {string} resource - The Refocus API endpoint for the resource being
   *  created.
   * @param {object} payload - The payload for the HTTP POST request.
   * @returns {Promise} A promise which resolves to the resource created.
   */
  patch: (token, resource, payload) => {
    const opts = {
      body: payload,
      headers: {
        Authorization: token,
      },
      json: true,
      resolveWithFullResponse: false,
      simple: false,
      uri: resource,
    };

    return new Promise((resolve, reject) => {
      rp.patch(opts)
      .then(resolve)
      .catch(reject);
    });
  }, // patch

  /**
   * Wrapper around request-promise-native package for POST requests.
   *
   * @param {string} resource - The Refocus API endpoint for the resource being
   *  created.
   * @param {object} payload - The payload for the HTTP POST request.
   * @returns {Promise} A promise which resolves to the resource deleted.
   */
  delete: (token, resource) => {
    const opts = {
      headers: {
        Authorization: token,
      },
      json: true,
      resolveWithFullResponse: false,
      simple: false,
      uri: resource,
    };

    return new Promise((resolve, reject) => {
      rp.delete(opts)
      .then(resolve)
      .catch(reject);
    });
  }, // delete
};
