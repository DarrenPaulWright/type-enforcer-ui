import { methodPoint } from 'type-enforcer-math';
import enforceCssSize from '../enforcer/enforceCssSize.js';

/**
 * Builds a chainable method for getting/setting a [CssSize](docs/CssSize.md)
 *
 * @function method.cssSize
 * @extends method.any
 * @alias methodCssSize
 *
 * @param {object} [options] - Same as {@link method.any} with the following differences:
 * @param {Function} [options.enforce=enforce.cssSize]
 * @param {Function} [options.compare=CssSize.isSame]
 * @param {boolean} [options.coerce=true] - If false then don't coerce the value
 *
 * @returns {Function}
 */
export default methodPoint.extend({
	init: undefined,
	enforce: (newValue, oldValue, options) => {
		return enforceCssSize(newValue, oldValue, options.coerce);
	}
});
