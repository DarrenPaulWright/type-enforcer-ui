import { methodAny } from 'type-enforcer';
import enforceElement from '../enforcer/enforceElement.js';

/**
 * Builds a chainable method for getting/setting a DOM element
 *
 * @function method.element
 * @extends method.any
 * @alias methodElement
 *
 * @param {object} [options] - Same as {@link method.any} with the following differences:
 * @param {Function} [options.enforce=enforce.element]
 *
 * @returns {Function}
 */
export default methodAny.extend({
	enforce: enforceElement
});
