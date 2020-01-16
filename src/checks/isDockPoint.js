import { isPoint } from 'type-enforcer-math';
import DockPoint from '../DockPoint.js';

/**
 * Check if a value is a [DockPoint](docs/DockPoint.md)
 *
 * @example
 * ``` javascript
 * import { isDockPoint } from 'type-enforcer-ui';
 *
 * isDockPoint(new DockPoint());
 * // => true
 *
 * isDockPoint('top');
 * // => false
 *
 * isDockPoint('top', true);
 * // => true
 * ```
 *
 * @function is.dockPoint
 * @alias isDockPoint
 *
 * @arg {*} value
 * @arg {Boolean} [coerce=false] - If true then see if the value can be coerced into a DockPoint
 *
 * @returns {Boolean}
 */
export default isPoint.extend(DockPoint);
