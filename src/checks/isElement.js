/**
 * Check if a value is a DOM element.
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
 * @param {*} value - A value to check.
 *
 * @returns {boolean}
 */
export default (value) => Boolean(value) && value.nodeType === 1;
