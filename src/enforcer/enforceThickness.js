import { enforceObject } from 'type-enforcer-math';
import isThickness from '../checks/isThickness.js';
import Thickness from '../Thickness.js';

/**
 * Enforce that a value is a [Thickness](docs/Thickness.md). Uses [isThickness](docs/checks.md#isThickness).
 *
 * @example
 * ``` javascript
 * import { enforce } from 'type-enforcer-ui';
 *
 * enforce.thickness(new Thickness('12px 20px'), new Thickness());
 * // => thickness of '12px 20px'
 *
 * enforce.thickness('12px 20px', new Thickness());
 * // => thickness of 0
 *
 * enforce.thickness('12px 20px', new Thickness(), true);
 * // => thickness of '12px 20px'
 * ```
 *
 * @function enforce.thickness
 * @alias enforceThickness
 *
 * @param {*} value
 * @param {Thickness} alt - Returned if the value is not the correct type
 * @param {boolean} [coerce=false] - If true then coerce the value when possible
 *
 * @returns {Thickness}
 */
export default enforceObject.extend(isThickness, (value) => new Thickness(value));
