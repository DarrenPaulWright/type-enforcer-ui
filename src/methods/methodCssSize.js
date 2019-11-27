import { methodPoint } from 'type-enforcer-math';
import enforceCssSize from '../enforcer/enforceCssSize';

/**
 * Builds a chainable method for getting/setting a [CssSize](docs/CssSize.md)
 *
 * @function method.cssSize
 * @extends method.any
 * @alias methodCssSize
 *
 * @arg {Object} [options] - Same as {@link method.any} with the following differences:
 * @arg {Function} [options.enforce=enforce.cssSize]
 * @arg {Function} [options.compare=CssSize.isSame]
 * @arg {Boolean} [options.coerce=true] - If false then don't coerce the value
 *
 * @returns {Function}
 */
export default methodPoint.extend({
	init: undefined,
	enforce: (newValue, oldValue, options) => {
		return enforceCssSize(newValue, oldValue, options.coerce);
	}
});
