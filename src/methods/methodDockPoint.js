import { methodPoint } from 'type-enforcer-math';
import enforceDockPoint from '../enforcer/enforceDockPoint.js';

/**
 * Builds a chainable method for getting/setting a [DockPoint](docs/DockPoint.md)
 *
 * @function method.dockPoint
 * @extends method.any
 * @alias methodDockPoint
 *
 * @param {object} [options] - Same as {@link method.any} with the following differences:
 * @param {Function} [options.enforce=enforce.dockPoint]
 * @param {Function} [options.compare=DockPoint.isSame]
 * @param {boolean} [options.coerce=true] - If false then don't coerce the value
 *
 * @returns {Function}
 */
export default methodPoint.extend({
	init: undefined,
	enforce: (newValue, oldValue, options) => {
		return enforceDockPoint(newValue, oldValue, options.coerce);
	}
});
