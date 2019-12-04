import { enforce } from 'type-enforcer-math';
import enforceCssSize from './enforceCssSize';
import enforceDockPoint from './enforceDockPoint';
import enforceElement from './enforceElement';
import enforceThickness from './enforceThickness';

/**
 * Utility functions for enforcing data types. Includes all the enforcers from [type-enforcer](https://github.com/DarrenPaulWright/type-enforcer) and [type-enforcer-math](https://github.com/DarrenPaulWright/type-enforcer-math), along with:
 *
 * ``` javascript
 * import { enforce } from 'type-enforcer-ui';
 *
 * // Or import individual functions
 * import { enforceBoolean, enforceString } from 'type-enforcer-ui';
 * ```
 *
 * @typedef {object} enforce
 */
export default {
	...enforce,
	cssSize: enforceCssSize,
	dockPoint: enforceDockPoint,
	element: enforceElement,
	thickness: enforceThickness
};
