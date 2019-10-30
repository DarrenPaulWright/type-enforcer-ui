import isThickness from '../checks/isThickness';
import Thickness from '../Thickness';

/**
 * Enforce that a value is a [Thickness](docs/Thickness.md). Uses [isThickness](docs/checks.md#isThickness).
 *
 * @example
 * ``` javascript
 * import { enforce } from 'type-enforcer-ui-addon';
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
 * @arg {*} value
 * @arg {Thickness} alt - Returned if the value is not the correct type
 * @arg {Boolean} [coerce=false] - If true then coerce the value when possible
 *
 * @returns {Thickness}
 */
export default (value, alt, coerce) => {
	if (isThickness(value)) {
		return value;
	}

	if (coerce === true && isThickness(value, true)) {
		return new Thickness(value);
	}

	return alt;
};