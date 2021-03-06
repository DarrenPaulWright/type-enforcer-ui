import { is } from 'type-enforcer-math';
import isCssSize from './isCssSize.js';
import isDockPoint from './isDockPoint.js';
import isElement from './isElement.js';
import isThickness from './isThickness.js';

/**
 * Utility functions for checking if something is a particular data type. Includes all the checks from [type-enforcer](https://github.com/DarrenPaulWright/type-enforcer) and [type-enforcer-math](https://github.com/DarrenPaulWright/type-enforcer-math).
 *
 * @example
 * ``` javascript
 * import { is } from 'type-enforcer-ui';
 *
 * // Or import individual functions
 * import { isBoolean, isString } from 'type-enforcer-ui';
 * ```
 *
 * @namespace is
 */
export default {
	...is,
	cssSize: isCssSize,
	dockPoint: isDockPoint,
	element: isElement,
	thickness: isThickness
};
