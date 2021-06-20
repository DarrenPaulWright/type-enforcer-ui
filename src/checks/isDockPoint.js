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
 * @param {*} value
 * @param {boolean} [coerce=false] - If true then see if the value can be coerced into a DockPoint
 *
 * @returns {boolean}
 */
export default isPoint.extend(DockPoint);
