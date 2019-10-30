import enforceCssSize from './enforceCssSize';
import enforceDockPoint from './enforceDockPoint';
import enforceElement from './enforceElement';
import enforceThickness from './enforceThickness';

/**
 * Utility functions for enforcing data types.
 *
 * ``` javascript
 * import { enforce } from 'type-enforcer-ui-addon';
 *
 * // Or import individual functions
 * import { enforceBoolean, enforceString } from 'type-enforcer-ui-addon';
 * ```
 *
 * @typedef {object} enforce
 */
export default {
	cssSize: enforceCssSize,
	dockPoint: enforceDockPoint,
	element: enforceElement,
	thickness: enforceThickness
};
