import { isPoint } from 'type-enforcer-math';
import CssSize from '../CssSize.js';

/**
 * Check if a value is a [CssSize](docs/CssSize.md)
 *
 * @example
 * ``` javascript
 * import { isCssSize } from 'type-enforcer-ui';
 *
 * isCssSize(new CssSize());
 * // => true
 *
 * isCssSize('14px');
 * // => false
 *
 * isCssSize('14px', true);
 * // => true
 * ```
 *
 * @function is.cssSize
 * @alias isCssSize
 *
 * @param {*} value
 * @param {boolean} [coerce=false] - If true then see if the value can be coerced into a CssSize
 *
 * @returns {boolean}
 */
export default isPoint.extend(CssSize);
