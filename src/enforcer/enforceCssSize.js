import { enforceObject } from 'type-enforcer-math';
import isCssSize from '../checks/isCssSize.js';
import CssSize from '../CssSize.js';

/**
 * Enforce that a value is a [CssSize](docs/CssSize.md). Uses [isCssSize](docs/checks.md#isCssSize).
 *
 * @example
 * ``` javascript
 * import { enforce } from 'type-enforcer-ui';
 *
 * enforce.cssSize(new CssSize('14px'), new CssSize());
 * // => cssSize of 14px
 *
 * enforce.cssSize('14px', new CssSize());
 * // => cssSize of 0
 *
 * enforce.cssSize('14px', new CssSize(), true);
 * // => cssSize of 14px
 * ```
 *
 * @function enforce.cssSize
 * @alias enforceCssSize
 *
 * @param {unknown} value
 * @param {CssSize} alt - Returned if the value is not the correct type
 * @param {boolean} [coerce=false] - If true then coerce the value when possible
 *
 * @returns {CssSize}
 */
export default enforceObject.extend(isCssSize, (value) => new CssSize(value));
