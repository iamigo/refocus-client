/**
 * refocus-client entry point
 */
const rp = require('request-promise');

/**
 * Wrapper around request-promise-native package for GET requests.
 *
 * @param {string} resource - The Refocus API endpoint for the resource
 *  requested.
 * @returns {Promise} A promise which resolves to the object or array
 *  requested.
 */
function _get(token, resource) {
  const opts = {
    headers: {
      Authorization: token,
    },
    json: true,
    method: 'GET',
    resolveWithFullResponse: false,
    simple: false,
    uri: resource,
  };

  return new Promise((resolve, reject) => {
    rp(opts)
    .then(resolve)
    .catch(reject);
  });
} // _get

/**
 * Wrapper around request-promise-native package for POST requests.
 *
 * @param {string} resource - The Refocus API endpoint for the resource being
 *  created.
 * @param {object} payload - The payload for the HTTP POST request.
 * @returns {Promise} A promise which resolves to the resource created.
 */
function _post(token, resource, payload) {
  const opts = {
    body: payload,
    headers: {
      Authorization: token,
    },
    json: true,
    method: 'POST',
    resolveWithFullResponse: false,
    simple: false,
    uri: resource,
  };

  return new Promise((resolve, reject) => {
    rp(opts)
    .then(resolve)
    .catch(reject);
  });
} // _post

/**
 * Wrapper around request-promise-native package for POST requests.
 *
 * @param {string} resource - The Refocus API endpoint for the resource being
 *  created.
 * @param {object} payload - The payload for the HTTP POST request.
 * @returns {Promise} A promise which resolves to the resource created.
 */
function _patch(token, resource, payload) {
  const opts = {
    body: payload,
    headers: {
      Authorization: token,
    },
    json: true,
    method: 'PATCH',
    resolveWithFullResponse: false,
    simple: false,
    uri: resource,
  };

  return new Promise((resolve, reject) => {
    rp(opts)
    .then(resolve)
    .catch(reject);
  });
} // _patch

/**
 * Wrapper around request-promise-native package for POST requests.
 *
 * @param {string} resource - The Refocus API endpoint for the resource being
 *  created.
 * @param {object} payload - The payload for the HTTP POST request.
 * @returns {Promise} A promise which resolves to the resource deleted.
 */
function _delete(token, resource) {
  const opts = {
    headers: {
      Authorization: token,
    },
    json: true,
    method: 'DELETE',
    resolveWithFullResponse: false,
    simple: false,
    uri: resource,
  };

  return new Promise((resolve, reject) => {
    rp(opts)
    .then(resolve)
    .catch(reject);
  });
} // _delete

/**
 * RefocusClient wraps some basic Refocus API functionality.
 */
class RefocusClient {

  /**
   * Creates and initializes a RefocusClient.
   *
   * @constructor
   * @param {string} url - Refocus server http(s) url.
   * @param {string} version - Refocus server API version, e.g. "v1".
   * @param {string} token - Refocus API token.
   */
  constructor(url, version, token) {
    this.url = url;
    this.version = version;
    this.token = token;
  } // constructor

  // --------------------------------------------------------------------------
  // Functions for working with Subjects...
  // --------------------------------------------------------------------------

  /**
   * Retrieve all subjects.
   *
   * @returns {Promise} a Bluebird Promise which resolves to an array of
   *  subjects.
   */
  getSubjects() {
    return _get(this.token, `${this.url}/${this.version}/subjects`);
  } // getSubjects

  /**
   * Retrieve the specified subject.
   *
   * @param {String} absolutePath - The absolutePath of the subject to
   *  retrieve.
   * @returns {Promise} a Bluebird Promise which resolves to the specified
   *  subject.
   */
  getSubject(absolutePath) {
    return _get(this.token,
      `${this.url}/${this.version}/subjects/${absolutePath}`);
  } // getSubject

  /**
   * Create a new Subject as a child of the specified parent Subject.
   *
   * @param {String} parentAbsolutePath - The absolutePath of the new Subject's
   *  parent.
   * @param {Object} newSubject - The new Subject to create.
   * @returns {Promise} A Bluebird Promise which resolves to the newly created
   *  Subject.
   */
  addChildSubject(parentAbsolutePath, newSubject) {
    return _post(this.token,
      `${this.url}/${this.version}/subjects/${parentAbsolutePath}/child`,
      newSubject);
  } // addChildSubject

  /**
   * Create a new root Subject.
   *
   * @param {String} newSubject - The new Subject to create.
   * @returns {Promise} A Bluebird Promise which resolves to the newly created
   *  Subject.
   */
  addRootSubject(newSubject) {
    return _post(this.token, `${this.url}/${this.version}/subjects`,
      newSubject);
  } // addRootSubject

  /**
   * Update a subject, modifying only the attributes you provide.
   *
   * @param {String} absolutePath - The absolutePath of the Subject to patch.
   * @param {Object} subject - An object containing the attributes you want to
   *  update.
   * @returns {Promise} A Bluebird Promise which resolves to the patched
   *  Subject.
   */
  patchSubject(absolutePath, subject) {
    return _patch(this.token,
      `${this.url}/${this.version}/subjects/${absolutePath}`, subject);
  } // patchSubject

  /**
   * Delete the specified subject.
   *
   * @param {String} absolutePath - The absolutePath of the Subject to delete.
   * @returns {Promise} A Bluebird Promise which resolves to the deleted
   *  Subject.
   */
  deleteSubject(absolutePath) {
    return _delete(this.token,
      `${this.url}/${this.version}/subjects/${absolutePath}`);
  } // deleteSubject

  // --------------------------------------------------------------------------
  // Functions for working with Aspects...
  // --------------------------------------------------------------------------

  /**
   * Retrieve all Aspects.
   *
   * @returns {Promise} A Bluebird promise which resolves to an array of
   *  Aspects.
   */
  getAspects() {
    return _get(this.token, `${this.url}/${this.version}/aspects`);
  } // getAspects

  /**
   * Retrieve the specified Aspect.
   *
   * @param {String} name - The name of the Aspect to retrieve.
   * @returns {Promise} A Bluebird Promise which resolves to the specified
   *  Aspect.
   */
  getAspect(name) {
    return _get(this.token, `${this.url}/${this.version}/aspects/${name}`);
  } // getAspect

  /**
   * Create a new Aspect.
   *
   * @param {Object} aspect - The aspect to create.
   * @returns {Promise} A Bluebird Promise which resolves to the newly created
   *  Aspect.
   */
  addAspect(aspect) {
    return _post(this.token, `${this.url}/${this.version}/aspects`, aspect);
  } // addAspect

  /**
   * Update an Aspect, modifying only the attributes you provide.
   *
   * @param {String} name - The name of the Aspect to patch.
   * @param {Object} aspect - An object containing the attributes you want to
   *  update.
   * @returns {Promise} A Bluebird Promise which resolves to the patched
   *  Aspect.
   */
  patchAspect(name, aspect) {
    return _patch(this.token, `${this.url}/${this.version}/aspects/${name}`,
      aspect);
  } // patchAspect

  /**
   * Delete the specified Aspect.
   *
   * @param {String} name - The name of the Aspect to delete.
   * @returns {Promise} A Bluebird Promise which resolves to the deleted
   *  Aspect.
   */
  deleteAspect(name) {
    return _delete(this.token, `${this.url}/${this.version}/aspects/${name}`);
  } // deleteAspect

  // --------------------------------------------------------------------------
  // Functions for working with Samples...
  // --------------------------------------------------------------------------

  /**
   * Insert or update an array of Samples asynchronously.
   *
   * @param {Array} arr - The array of Samples to upsert.
   * @returns {Promise} A Bluebird Promise which resolves to the status OK.
   */
  bulkUpsertSamples(arr) {
    return _post(this.token, `${this.url}/${this.version}/samples/upsert/bulk`,
      arr);
  } // bulkUpsertSamples

  // --------------------------------------------------------------------------
  // Functions for working with Perspectives...
  // --------------------------------------------------------------------------

  /**
   * Retrieve all Perspectives.
   *
   * @returns {Promise} A Bluebird promise which resolves to an array of
   *  Perspectives.
   */
  getPerspectives() {
    return _get(this.token, `${this.url}/${this.version}/perspectives`);
  } // getPerspectives

  /**
   * Retrieve the specified Perspective.
   *
   * @param {String} name - The name of the Perspective to retrieve.
   * @returns {Promise} A Bluebird Promise which resolves to the specified
   *  Perspective.
   */
  getPerspective(name) {
    return _get(this.token,
      `${this.url}/${this.version}/perspectives/${name}`);
  } // getPerspective

  /**
   * Create a new Perspective.
   *
   * @param {Object} perspective - The Perspective to create.
   * @returns {Promise} A Bluebird Promise which resolves to the newly created
   *  Aspect.
   */
  addPerspective(perspective) {
    return _post(this.token, `${this.url}/${this.version}/perspectives`,
      perspective);
  } // addPerspective

  /**
   * Update a Perspective, modifying only the attributes you provide.
   *
   * @param {String} name - The name of the Perspective to patch.
   * @param {Object} perspective - An object containing the attributes you want
   *  to update.
   * @returns {Promise} A Bluebird Promise which resolves to the patched
   *  Perspective.
   */
  patchPerspective(name, perspective) {
    return _patch(this.token,
      `${this.url}/${this.version}/perspectives/${name}`, perspective);
  } // patchPerspective

  /**
   * Delete the specified Perspective.
   *
   * @param {String} name - The name of the Perspective to delete.
   * @returns {Promise} A Bluebird Promise which resolves to the deleted
   *  Perspective.
   */
  deletePerspective(name) {
    return _delete(this.token,
      `${this.url}/${this.version}/perspectives/${name}`);
  } // deletePerspective

} // RefocusClient

module.exports = RefocusClient;
