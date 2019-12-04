import { is } from 'type-enforcer-math';
import isCssSize from './isCssSize';
import isDockPoint from './isDockPoint';
import isElement from './isElement';
import isThickness from './isThickness';

/**
 * Utility functions for checking if something is a particular data type. Includes all the checks from [type-enforcer](https://github.com/DarrenPaulWright/type-enforcer) and [type-enforcer-math](https://github.com/DarrenPaulWright/type-enforcer-math), along with:
 *
 * ``` javascript
 * import { is } from 'type-enforcer-ui';
 *
 * // Or import individual functions
 * import { isBoolean, isString } from 'type-enforcer-ui';
 * ```
 *
 * @typedef {object} is
 */
export default {
	...is,
	cssSize: isCssSize,
	dockPoint: isDockPoint,
	element: isElement,
	thickness: isThickness
};
