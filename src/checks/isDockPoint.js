import DockPoint from '../DockPoint';

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
export default (value, coerce) => {
	return (value instanceof DockPoint) || (coerce === true && DockPoint.isValid(value));
};
