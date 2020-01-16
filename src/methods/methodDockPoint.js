import { methodPoint } from 'type-enforcer-math';
import enforceDockPoint from '../enforcer/enforceDockPoint.js';

/**
 * Builds a chainable method for getting/setting a [DockPoint](docs/DockPoint.md)
 *
 * @function method.dockPoint
 * @extends method.any
 * @alias methodDockPoint
 *
 * @arg {Object} [options] - Same as {@link method.any} with the following differences:
 * @arg {Function} [options.enforce=enforce.dockPoint]
 * @arg {Function} [options.compare=DockPoint.isSame]
 * @arg {Boolean} [options.coerce=true] - If false then don't coerce the value
 *
 * @returns {Function}
 */
export default methodPoint.extend({
	init: undefined,
	enforce: (newValue, oldValue, options) => {
		return enforceDockPoint(newValue, oldValue, options.coerce);
	}
});
