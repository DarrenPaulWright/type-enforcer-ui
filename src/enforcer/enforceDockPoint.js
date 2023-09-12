import { enforceObject } from 'type-enforcer-math';
import isDockPoint from '../checks/isDockPoint.js';

import DockPoint from '../DockPoint.js';

/**
 * Enforce that a value is a [DockPoint](docs/DockPoint.md). Uses [isDockPoint](docs/checks.md#isDockPoint).
 *
 * @example
 * ``` javascript
 * import { enforce } from 'type-enforcer-ui';
 *
 * enforce.dockPoint(new DockPoint(DockPoint.POINTS.TOP), new DockPoint(DockPoint.POINTS.BOTTOM));
 * // => dockPoint of top
 *
 * enforce.dockPoint('top', new DockPoint(DockPoint.POINTS.BOTTOM));
 * // => dockPoint of bottom
 *
 * enforce.dockPoint('top', new DockPoint(DockPoint.POINTS.BOTTOM), true);
 * // => dockPoint of top
 * ```
 *
 * @function enforce.dockPoint
 * @alias enforceDockPoint
 *
 * @param {unknown} value
 * @param {string} alt - Returned if the value is not the correct type
 * @param {boolean} [coerce=false] - If true then coerce the value when possible
 *
 * @returns {DockPoint}
 */
export default enforceObject.extend(isDockPoint, (value) => new DockPoint(value));
