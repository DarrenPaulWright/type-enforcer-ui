import { enforce } from 'type-enforcer';
import enforceCssSize from './enforceCssSize';
import enforceDockPoint from './enforceDockPoint';
import enforceElement from './enforceElement';
import enforceThickness from './enforceThickness';

/**
 * Utility functions for enforcing data types.
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
