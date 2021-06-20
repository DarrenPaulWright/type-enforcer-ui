import { methodPoint } from 'type-enforcer-math';
import enforceThickness from '../enforcer/enforceThickness.js';

/**
 * Builds a chainable method for getting/setting a [Thickness](docs/Thickness.md)
 *
 * @function method.thickness
 * @extends method.any
 * @alias methodThickness
 *
 * @param {object} [options] - Same as {@link method.any} with the following differences:
 * @param {Function} [options.enforce=enforce.thickness]
 * @param {Function} [options.compare=Thickness.isSame]
 * @param {boolean} [options.coerce=true] - If false then don't coerce the value
 *
 * @returns {Function}
 */
export default methodPoint.extend({
	init: undefined,
	enforce: (newValue, oldValue, options) => {
		return enforceThickness(newValue, oldValue, options.coerce);
	}
});
