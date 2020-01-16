import { enforce } from 'type-enforcer-math';
import enforceCssSize from './enforceCssSize.js';
import enforceDockPoint from './enforceDockPoint.js';
import enforceElement from './enforceElement.js';
import enforceThickness from './enforceThickness.js';

/**
 * Utility functions for enforcing data types. Includes all the enforcers from [type-enforcer](https://github.com/DarrenPaulWright/type-enforcer) and [type-enforcer-math](https://github.com/DarrenPaulWright/type-enforcer-math).
 *
 * @example
 * ``` javascript
 * import { enforce } from 'type-enforcer-ui';
 *
 * // Or import individual functions
 * import { enforceBoolean, enforceString } from 'type-enforcer-ui';
 * ```
 *
 * @namespace enforce
 */
export default {
	...enforce,
	cssSize: enforceCssSize,
	dockPoint: enforceDockPoint,
	element: enforceElement,
	thickness: enforceThickness
};
