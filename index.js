/**
 * refocus-client entry point
 */
const fs = require('fs');
const req = require('./lib/requestWrapper');
const mapSeries = require('promise-map-series');

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
   * Retrieve a subject hierarchy.
   *
   * @param {String} absolutePath - The absolutePath of the root subject of the
   *  hierarhcy to retrieve.
   * @returns {Promise} a Bluebird Promise which resolves to the hierarchy
   *  json.
   */
  getHierarchy(absolutePath) {
    return req.get(this.token,
      `${this.url}/${this.version}/subjects/${absolutePath}/hierarchy`);
  } // getHierarchy

  /**
   * Retrieve all subjects, optional query params for filter/sort/limit/offset.
   *
   * @param {String} queryParams - Query params (no leading "?").
   * @returns {Promise} a Bluebird Promise which resolves to an array of
   *  subjects.
   */
  getSubjects(queryParams) {
    let u = `${this.url}/${this.version}/subjects`;
    if (queryParams) {
      u += `?${queryParams}`;
    }
    return req.get(this.token, u);
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
    return req.get(this.token,
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
    return req.post(this.token,
      `${this.url}/${this.version}/subjects/${parentAbsolutePath}/child`,
      newSubject);
  } // addChildSubject

  /**
   * For each element in the childrenToAdd array, create a new Subject as a
   * child of the specified parent Subject.
   *
   * @param {Array} childrenToAdd - An array of objects where each object has
   *  a "parentAbsolutePath" attribute and a "subject" attribute (the
   *  subject being added).
   * @returns {Promise} A Bluebird Promise which resolves to an array of
   *  the new Subjects.
   */
  addChildSubjects(childrenToAdd) {
    return mapSeries(childrenToAdd,
      (i) => this.addChildSubject(i.parentAbsolutePath, i.subject),
      this);
  } // addChildSubjects

  /**
   * Create a new root Subject.
   *
   * @param {String} newSubject - The new Subject to create.
   * @returns {Promise} A Bluebird Promise which resolves to the newly created
   *  Subject.
   */
  addRootSubject(newSubject) {
    return req.post(this.token, `${this.url}/${this.version}/subjects`,
      newSubject);
  } // addRootSubject

  /**
   * Create new root Subjects.
   *
   * @param {Array} rootSubjectsToAdd - The new Subjects to create.
   * @returns {Promise} A Bluebird Promise which resolves to an array of the
   *  newly created Subjects.
   */
  addRootSubjects(rootSubjectsToAdd) {
    return mapSeries(rootSubjectsToAdd, this.addRootSubject, this);
  } // addRootSubjects

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
    return req.patch(this.token,
      `${this.url}/${this.version}/subjects/${absolutePath}`, subject);
  } // patchSubject

  /**
   * Updates multiple subjects sequentially, modifying only the attributes you
   * provide.
   *
   * @param {Array} toPatch - An array of objects where each object has an
   *  "absolutePath" attribute (which subject to patch) and a "subject"
   *  attribute (the attributes to patch for that subject).
   * @returns {Promise} A Bluebird Promise which resolves to an array of
   *  the patched Subjects.
   */
  patchSubjects(toPatch) {
    return mapSeries(toPatch,
      (i) => this.patchSubject(i.absolutePath, i.subject),
      this);
  } // patchSubjects

  /**
   * Delete the specified subject.
   *
   * @param {String} absolutePath - The absolutePath of the Subject to delete.
   * @returns {Promise} A Bluebird Promise which resolves to the deleted
   *  Subject.
   */
  deleteSubject(absolutePath) {
    return req.delete(this.token,
      `${this.url}/${this.version}/subjects/${absolutePath}`);
  } // deleteSubject

  /**
   * Deletes multiple subjects sequentially.
   *
   * @param {Array} toDelete - An array of absolutePaths.
   * @returns {Promise} A Bluebird Promise which resolves to an array of
   *  the deleted Subjects.
   */
  deleteSubjects(toDelete) {
    return mapSeries(toDelete, this.deleteSubject, this);
  } // deleteSubjects

  /**
   * Deletes the specified tag from the specified subject.
   *
   * @param {String} absolutePath - The absolutePath of the Subject.
   * @param {String} tag - The tag to delete.
   * @returns {Promise} A Bluebird Promise which resolves to the updated
   *  Subject.
   */
  deleteSubjectTag(absolutePath, tag) {
    return req.delete(this.token,
      `${this.url}/${this.version}/subjects/${absolutePath}/tags/${tag}`);
  } // deleteSubjectTag

  /**
   * Deletes all tags from the specified subject.
   *
   * @param {String} absolutePath - The absolutePath of the Subject.
   * @returns {Promise} A Bluebird Promise which resolves to the updated
   *  Subject.
   */
  deleteSubjectTags(absolutePath) {
    return req.delete(this.token,
      `${this.url}/${this.version}/subjects/${absolutePath}/tags`);
  } // deleteSubjectTags

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
    return req.get(this.token, `${this.url}/${this.version}/aspects`);
  } // getAspects

  /**
   * Retrieve the specified Aspect.
   *
   * @param {String} name - The name of the Aspect to retrieve.
   * @returns {Promise} A Bluebird Promise which resolves to the specified
   *  Aspect.
   */
  getAspect(name) {
    return req.get(this.token, `${this.url}/${this.version}/aspects/${name}`);
  } // getAspect

  /**
   * Create a new Aspect.
   *
   * @param {Object} aspect - The aspect to create.
   * @returns {Promise} A Bluebird Promise which resolves to the newly created
   *  Aspect.
   */
  addAspect(aspect) {
    return req.post(this.token, `${this.url}/${this.version}/aspects`, aspect);
  } // addAspect

  /**
   * Create new Aspects.
   *
   * @param {Array} aspects - The aspects to create.
   * @returns {Promise} A Bluebird Promise which resolves to an array of the
   * the newly created Aspects.
   */
  addAspects(aspects) {
    return mapSeries(aspects, this.addAspect, this);
  } // addAspects

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
    return req.patch(this.token, `${this.url}/${this.version}/aspects/${name}`,
      aspect);
  } // patchAspect

  /**
   * Updates multiple Aspects sequentially, modifying only the attributes you
   * provide.
   *
   * @param {Array} toPatch - An array of objects where each object has a
   *  "name" attribute (which aspect to patch) and an "aspect" attribute (the
   *  attributes to patch for that aspect).
   * @returns {Promise} A Bluebird Promise which resolves to an array of
   *  the patched Aspects.
   */
  patchAspects(toPatch) {
    return mapSeries(toPatch,
      (i) => this.patchAspect(i.name, i.aspect),
      this);
  } // patchAspects

  /**
   * Delete the specified Aspect.
   *
   * @param {String} name - The name of the Aspect to delete.
   * @returns {Promise} A Bluebird Promise which resolves to the deleted
   *  Aspect.
   */
  deleteAspect(name) {
    return req.delete(this.token, `${this.url}/${this.version}/aspects/${name}`);
  } // deleteAspect

  /**
   * Deletes multiple Aspects sequentially.
   *
   * @param {Array} toDelete - An array of names.
   * @returns {Promise} A Bluebird Promise which resolves to an array of
   *  the deleted Aspects.
   */
  deleteAspects(toDelete) {
    return mapSeries(toDelete, this.deleteAspect, this);
  } // deleteAspects

  // --------------------------------------------------------------------------
  // Functions for working with Samples...
  // --------------------------------------------------------------------------

  /**
   * Insert or update an array of Samples asynchronously. If a sample's "value"
   * attribute is not type string, converts it to string.
   *
   * @param {Array} arr - The array of Samples to upsert.
   * @returns {Promise} A Bluebird Promise which resolves to the status OK.
   */
  bulkUpsertSamples(arr) {
    arr.forEach((sample) => {
      if (typeof sample.value !== 'string') {
        sample.value = sample.value.toString();
      }
    });
    return req.post(this.token,
      `${this.url}/${this.version}/samples/upsert/bulk`,
      arr);
  } // bulkUpsertSamples

  /**
   * Retrieve the specified sample.
   *
   * @param {String} name - The name of the sample to retrieve.
   * @returns {Promise} a Bluebird Promise which resolves to the specified
   *  sample.
   */
  getSample(name) {
    return req.get(this.token, `${this.url}/${this.version}/samples/${name}`);
  } // getSample

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
    return req.get(this.token, `${this.url}/${this.version}/perspectives`);
  } // getPerspectives

  /**
   * Retrieve the specified Perspective.
   *
   * @param {String} name - The name of the Perspective to retrieve.
   * @returns {Promise} A Bluebird Promise which resolves to the specified
   *  Perspective.
   */
  getPerspective(name) {
    return req.get(this.token,
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
    return req.post(this.token, `${this.url}/${this.version}/perspectives`,
      perspective);
  } // addPerspective

  /**
   * Create new Perspectives.
   *
   * @param {Array} perspectives - The Perspectives to create.
   * @returns {Promise} A Bluebird Promise which resolves to the newly created
   *  Perspectives.
   */
  addPerspectives(perspectives) {
    return mapSeries(perspectives, this.addPerspective, this);
  } // addPerspectives

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
    return req.patch(this.token,
      `${this.url}/${this.version}/perspectives/${name}`, perspective);
  } // patchPerspective

  /**
   * Updates multiple Perspectives sequentially, modifying only the attributes
   * you provide.
   *
   * @param {Array} toPatch - An array of objects where each object has a
   *  "name" attribute (which perspective to patch) and a "perspective"
   * attribute (the attributes to patch for that perspective).
   * @returns {Promise} A Bluebird Promise which resolves to an array of
   *  the patched Perspectives.
   */
  patchPerspectives(toPatch) {
    return mapSeries(toPatch,
      (i) => this.patchPerspective(i.name, i.perspective),
      this);
  } // patchAspects

  /**
   * Delete the specified Perspective.
   *
   * @param {String} name - The name of the Perspective to delete.
   * @returns {Promise} A Bluebird Promise which resolves to the deleted
   *  Perspective.
   */
  deletePerspective(name) {
    return req.delete(this.token,
      `${this.url}/${this.version}/perspectives/${name}`);
  } // deletePerspective

  /**
   * Deletes multiple Perspectives sequentially.
   *
   * @param {Array} toDelete - An array of names.
   * @returns {Promise} A Bluebird Promise which resolves to an array of
   *  the deleted Perspectives.
   */
  deletePerspectives(toDelete) {
    return mapSeries(toDelete, this.deletePerspective, this);
  } // deleteAspects


  // --------------------------------------------------------------------------
  // Functions for working with Lenses...
  // --------------------------------------------------------------------------

  /**
   * Retrieve all Lenses.
   *
   * @returns {Promise} A Bluebird promise which resolves to an array of
   *  Lenses.
   */
  getLenses() {
    return req.get(this.token, `${this.url}/${this.version}/lenses`);
  } // getAspects

  /**
   * Retrieve the specified Lens.
   *
   * @param {String} name - The name of the Lens to retrieve.
   * @returns {Promise} A Bluebird Promise which resolves to the specified
   *  Lens.
   */
  getLens(name) {
    return req.get(this.token, `${this.url}/${this.version}/lenses/${name}`);
  } // getAspect

  /**
   * Create a new Lens.
   *
   * @param {String} pathToLibrary - Path to the library zip file.
   * @param {Object} lens - Optional object to override what the library
   *  specifies.
   * @returns {Promise} A Bluebird Promise which resolves to the newly created
   *  Lens.
   */
  addLens(pathToLibrary, lens) {
    const lensToPost = lens || {};
    lensToPost.library = fs.createReadStream(pathToLibrary);

    // Need this to resolve https://github.com/request/request/issues/1761
    lensToPost.isPublished = new Boolean(lensToPost.isPublished).toString();

    return req.postMultipart(this.token, `${this.url}/${this.version}/lenses`,
      lensToPost);
  } // addLens

  /**
   * Delete the specified Lens.
   *
   * @param {String} name - The name of the Lens to delete.
   * @returns {Promise} A Bluebird Promise which resolves to the deleted
   *  Lens.
   */
  deleteLens(name) {
    return req.delete(this.token, `${this.url}/${this.version}/lenses/${name}`);
  } // deleteLens

  // --------------------------------------------------------------------------
  // Functions for working with Global Config...
  // --------------------------------------------------------------------------

  /**
   * Retrieve all Global Config items.
   *
   * @returns {Promise} A Bluebird promise which resolves to an array of
   *  Global Config items.
   */
  getGlobalConfigItems() {
    return req.get(this.token, `${this.url}/${this.version}/globalconfig`);
  } // getGlobalConfigItems

  /**
   * Retrieve the specified Global Config item.
   *
   * @param {String} key - The key of the Global Config item to retrieve.
   * @returns {Promise} A Bluebird Promise which resolves to the specified
   *  Global Config item.
   */
  getGlobalConfigItem(key) {
    return req.get(this.token,
      `${this.url}/${this.version}/globalconfig/${key}`);
  } // getGlobalConfigItem

  /**
   * Create a new Global Config item.
   *
   * @param {Object} globalConfig - The Global Config item to create.
   * @returns {Promise} A Bluebird Promise which resolves to the newly created
   *  Global Config item.
   */
  addGlobalConfigItem(globalConfig) {
    return req.post(this.token, `${this.url}/${this.version}/globalconfig`,
      globalConfig);
  } // addGlobalConfigItem

  /**
   * Update the value of a Global Config item.
   *
   * @param {String} key - The key of the Global Config item to patch.
   * @param {Object} value - The new value you want to assign.
   * @returns {Promise} A Bluebird Promise which resolves to the patched
   *  Global Config item.
   */
  patchGlobalConfigItem(key, value) {
    return req.patch(this.token,
      `${this.url}/${this.version}/globalconfig/${key}`, { value });
  } // patchGlobalConfigItem

  /**
   * Delete the specified Global Config item.
   *
   * @param {String} key - The key of the Global Config item to delete.
   * @returns {Promise} A Bluebird Promise which resolves to the deleted
   *  Global Config item.
   */
  deleteGlobalConfigItem(key) {
    return req.delete(this.token,
      `${this.url}/${this.version}/globalconfig/${key}`);
  } // deleteGlobalConfigItem

} // RefocusClient

module.exports = RefocusClient;
