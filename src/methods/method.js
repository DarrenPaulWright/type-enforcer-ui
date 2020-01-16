import { method } from 'type-enforcer-math';
import methodCssSize from './methodCssSize.js';
import methodDockPoint from './methodDockPoint.js';
import methodElement from './methodElement.js';
import methodThickness from './methodThickness.js';

/**
 * Enforce data types and remove common boilerplate code on class methods. Includes all the methods from [type-enforcer](https://github.com/DarrenPaulWright/type-enforcer) and [type-enforcer-math](https://github.com/DarrenPaulWright/type-enforcer-math).
 *
 * @example
 * ``` javascript
 * import { method } from 'type-enforcer-ui';
 *
 * // Or import individual functions
 * import { methodBoolean, methodString } from 'type-enforcer-ui';
 *
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
 * @namespace method
 */
export default {
	...method,
	cssSize: methodCssSize,
	dockPoint: methodDockPoint,
	element: methodElement,
	thickness: methodThickness
};
