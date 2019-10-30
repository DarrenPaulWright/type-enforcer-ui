import methodCssSize from './methodCssSize';
import methodDockPoint from './methodDockPoint';
import methodElement from './methodElement';
import methodThickness from './methodThickness';

/**
 * Enforce data types and remove common boilerplate code on class methods.
 *
 * ``` javascript
 * import { method } from 'type-enforcer-ui-addon';
 *
 * // Or import individual functions
 * import { methodBoolean, methodString } from 'type-enforcer-ui-addon';
 * ```
 *
 * @example
 * ``` javascript
 * // Use it as a prototype:
 * const Thing = function() {};
 *
 * Thing.prototype.myMethod = method.string([options]);
 *
 *
 * // or in a class:
 * class Thing() {}
 *
 * Thing.prototype.myMethod = method.string([options]);
 *
 *
 * // or as a non-prototype method:
 * const Thing = function() {
 *     this.myMethod = method.string([options]);
 * };
 * ```
 *
 * @typedef {object} method
 */
export default {
	cssSize: methodCssSize,
	dockPoint: methodDockPoint,
	element: methodElement,
	thickness: methodThickness
};
