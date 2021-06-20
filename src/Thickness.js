import { castArray, isString, PrivateVars } from 'type-enforcer';
import CssSize from './CssSize.js';
import methodElement from './methods/methodElement.js';

const SEPARATOR = /[ ,]+/u;
const SPACE = ' ';
const splitArgs = (args) => (args.length === 1 && isString(args[0])) ? args[0].trim()
	.split(SEPARATOR) : args;

const _ = new PrivateVars();

/**
 * @class Thickness
 * @classdesc Replicates the functionality of css border-width, margin, and padding, or anything that requires top, right, bottom, and left css sizes.
 * @example
 * ``` javascript
 * import { Thickness } from 'type-enforcer-ui';
 *
 * const thickness1 = new Thickness();
 * console.log(thickness1.toString());
 * // => '0'
 *
 * const thickness2 = new Thickness(1, 2, 3, 4);
 * console.log(thickness2.toString());
 * // => '1px 2px 3px 4px'
 *
 * const thickness3 = new Thickness([5, 6, 7]);
 * console.log(thickness3.toString());
 * // => '5px 6px 7px'
 *
 * const thickness4 = new Thickness('20px 30px');
 * console.log(thickness4.toString());
 * // => '20px 30px'
 *
 * const thickness5 = new Thickness('20px');
 * thickness5.bottom = 5;
 * console.log(thickness5.toString());
 * // => '20px 20px 5px'
 * ```
 *
 * @param {string | number | Array} [top] - If only one size is provided it gets applied to all sides. See examples for different arrangements of args.
 * @param {string | number} [right] - If two sizes are provided the first gets applied to top and bottom, the second size gets applied right and left
 * @param {string | number} [bottom] - If three sizes are provided the first gets applied to top, the second to right and left, and the third to bottom
 * @param {string | number} [left] - If four sizes are provided then they get applied to top, right, bottom, and left respectively
 */
export default class Thickness {
	constructor(...args) {
		_.set(this, {
			top: new CssSize(),
			right: new CssSize(),
			bottom: new CssSize(),
			left: new CssSize()
		});

		if (args.length !== 0) {
			this.set(...args);
		}
	}

	/**
	 * Set the sizes of all sides.
	 *
	 * @memberOf Thickness
	 * @instance
	 *
	 * @param {...string | ...number | Array | Thickness} [args] - Can be multiple numbers as pixels (1, 2,3 , 4) or multiple strings ('1px', '2rem') or an array of similar numbers or strings or another thickness.
	 */
	set(...args) {
		const _self = _(this);

		args = splitArgs(args);

		const setValues = (top, right, bottom, left) => {
			_self.top.set(top);
			_self.right.set(right);
			_self.bottom.set(bottom);
			_self.left.set(left);
		};

		if (Thickness.isValid(...args)) {
			if (args[0] instanceof Thickness) {
				setValues(args[0].top, args[0].right, args[0].bottom, args[0].left);
			}
			else if (args.length === 1) {
				setValues(args[0], args[0], args[0], args[0]);
			}
			else if (args.length === 2) {
				setValues(args[0], args[1], args[0], args[1]);
			}
			else if (args.length === 3) {
				setValues(args[0], args[1], args[2], args[1]);
			}
			else if (args.length === 4) {
				setValues(args[0], args[1], args[2], args[3]);
			}
		}
	}

	/**
	 * Determine if something is a valid Thickness.
	 *
	 * @memberOf Thickness
	 *
	 * @param {...string | ...number | Array | Thickness} [args] - Can be multiple numbers as pixels (1, 2,3 , 4) or multiple strings ('1px', '2rem') or an array of similar numbers or strings or another thickness.
	 *
	 * @returns {boolean}
	 */
	static isValid(...args) {
		args = splitArgs(args);

		return args[0] instanceof Thickness ||
			(
				args.length !== 0 && args.length < 5 &&
				castArray(args).every(CssSize.isValid)
			);
	}

	/**
	 * The top size.
	 *
	 * @memberOf Thickness
	 * @instance
	 *
	 * @type {CssSize}
	 */
	get top() {
		return _(this).top.toPixels(true);
	}

	set top(size) {
		_(this).top.set(size);
	}

	/**
	 * The right size.
	 *
	 * @memberOf Thickness
	 * @instance
	 *
	 * @type {CssSize}
	 */
	get right() {
		return _(this).right.toPixels(true);
	}

	set right(size) {
		_(this).right.set(size);
	}

	/**
	 * The bottom size.
	 *
	 * @memberOf Thickness
	 * @instance
	 *
	 * @type {CssSize}
	 */
	get bottom() {
		return _(this).bottom.toPixels(true);
	}

	set bottom(size) {
		_(this).bottom.set(size);
	}

	/**
	 * The left size.
	 *
	 * @memberOf Thickness
	 * @instance
	 *
	 * @type {CssSize}
	 */
	get left() {
		return _(this).left.toPixels(true);
	}

	set left(size) {
		_(this).left.set(size);
	}

	/**
	 * Get the sum of the right and left.
	 *
	 * @memberOf Thickness
	 * @instance
	 * @readonly
	 *
	 * @type {number}
	 */
	get horizontal() {
		const _self = _(this);

		return _self.left.toPixels(true) + _self.right.toPixels(true);
	}

	/**
	 * Get the sum of the top and bottom.
	 *
	 * @memberOf Thickness
	 * @instance
	 * @readonly
	 *
	 * @type {number}
	 */
	get vertical() {
		const _self = _(this);

		return _self.top.toPixels(true) + _self.bottom.toPixels(true);
	}

	/**
	 * Determine if another thickness is the same as this one.
	 *
	 * @memberOf Thickness
	 * @instance
	 *
	 * @param {Thickness | string} thickness - A value to compare to this one.
	 *
	 * @returns {boolean}
	 */
	isSame(thickness) {
		const _self = _(this);

		return (thickness instanceof Thickness &&
			_self.top.isSame(thickness.top) &&
			_self.right.isSame(thickness.right) &&
			_self.bottom.isSame(thickness.bottom) &&
			_self.left.isSame(thickness.left)
		) || (Thickness.isValid(thickness) && this.toString() === thickness.toString());
	}

	/**
	 * Get this thickness as a space separated string.
	 *
	 * @memberOf Thickness
	 * @instance
	 *
	 * @returns {string}
	 */
	toString() {
		const _self = _(this);
		let output = '';

		if (_self.right.isSame(_self.left) === false) {
			output = SPACE + _self.left.toPixels();
		}

		if (output !== '' || _self.top.isSame(_self.bottom) === false) {
			output = SPACE + _self.bottom.toPixels() + output;
		}

		if (output !== '' || _self.right.isSame(_self.top) === false) {
			output = SPACE + _self.right.toPixels() + output;
		}

		return _self.top.toPixels() + output;
	}
}

Object.assign(Thickness.prototype, {
	/**
	 * Set the element to measure font based units against.
	 *
	 * @method
	 * @memberOf Thickness
	 * @instance
	 *
	 * @param {Element} [element] - A DOM element.
	 *
	 * @returns {this|Element}
	 */
	element: methodElement({
		set(element) {
			const _self = _(this);

			_self.top.element(element);
			_self.right.element(element);
			_self.bottom.element(element);
			_self.left.element(element);
		}
	})
});
