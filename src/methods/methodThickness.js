import { methodPoint } from 'type-enforcer-math';
import enforceThickness from '../enforcer/enforceThickness';

/**
 * Builds a chainable method for getting/setting a [Thickness](docs/Thickness.md)
 *
 * @function method.thickness
 * @extends method.any
 * @alias methodThickness
 *
 * @arg {Object} [options] - Same as {@link method.any} with the following differences:
 * @arg {Function} [options.enforce=enforce.thickness]
 * @arg {Function} [options.compare=Thickness.isSame]
 * @arg {Boolean} [options.coerce=true] - If false then don't coerce the value
 *
 * @returns {Function}
 */
export default methodPoint.extend({
	init: undefined,
	enforce: (newValue, oldValue, options) => {
		return enforceThickness(newValue, oldValue, options.coerce);
	}
});
