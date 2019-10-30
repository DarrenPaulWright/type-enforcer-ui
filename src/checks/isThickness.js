import Thickness from '../Thickness';

/**
 * Check if a value is a [Thickness](docs/Thickness.md)
 *
 * @example
 * ``` javascript
 * import { isThickness } from 'type-enforcer-ui-addon';
 *
 * isThickness(new Thickness());
 * // => true
 *
 * isThickness('12px 20px');
 * // => false
 *
 * isThickness('12px 20px', true);
 * // => true
 * ```
 *
 * @function is.thickness
 * @alias isThickness
 *
 * @arg {*} value
 * @arg {Boolean} [coerce=false] - If true then see if the value can be coerced into a Thickness
 *
 * @returns {Boolean}
 */
export default (value, coerce) => {
	return (value instanceof Thickness) || (coerce === true && Thickness.isValid(value));
};