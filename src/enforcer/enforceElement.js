import isElement from '../checks/isElement';

/**
 * Enforce that a value is a DOM element. Uses [isElement](docs/checks.md#isElement).
 *
 * @example
 * ``` javascript
 * import { enforce } from 'type-enforcer-ui';
 *
 * enforce.element(document.createElement('span'), document.createElement('div'));
 * // => a span element
 *
 * enforce.element('span', document.createElement('div'));
 * // => a div element
 *
 * enforce.element('span', document.createElement('div'), true);
 * // => a span element
 * ```
 *
 * @function enforce.element
 * @alias enforceElement
 *
 * @arg {*} value
 * @arg {Element} alt - Returned if the value is not the correct type
 *
 * @returns {Element}
 */
export default (value, alt) => isElement(value) ? value : alt;
