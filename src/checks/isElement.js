/**
 * Check if a value is a DOM element
 *
 * @example
 * ``` javascript
 * import { isElement } from 'type-enforcer-ui';
 *
 * isElement(document.createElement('div'));
 * // => true
 * ```
 *
 * @function is.element
 * @alias isElement
 *
 * @arg {*} value
 *
 * @returns {Boolean}
 */
export default (value) => Boolean(value) && value.nodeType === 1;
