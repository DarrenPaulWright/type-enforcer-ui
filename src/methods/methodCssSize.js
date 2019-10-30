import { methodAny, sameValueZero } from 'type-enforcer';
import isCssSize from '../checks/isCssSize';
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
export default methodAny.extend({
	enforce: (newValue, oldValue, options) => {
		return enforceCssSize(newValue, oldValue, options.coerce);
	},
	compare: (newValue, oldValue) => {
		if (isCssSize(oldValue)) {
			return !oldValue.isSame(newValue);
		}
		if (isCssSize(newValue)) {
			return !newValue.isSame(oldValue);
		}

		return !sameValueZero(newValue, oldValue);
	},
	coerce: true
});
