import { isFloat, isNumber, isString, PrivateVars } from 'type-enforcer';
import methodElement from './methods/methodElement.js';
import {
	AUTO,
	CENTIMETERS,
	CH,
	EM,
	EX,
	INCHES,
	INHERIT,
	INITIAL,
	MILLIMETERS,
	NONE,
	PERCENT,
	PICAS,
	PIXELS,
	POINTS,
	ROOT_EM,
	VIEWPORT_HEIGHT,
	VIEWPORT_MIN,
	VIEWPORT_WIDTH,
	ZERO_PIXELS
} from './utility/cssUnits.js';
import isNonZeroNumber from './utility/isNonZeroNumber.js';
import measureCssUnits from './utility/measureCssUnits.js';
import windowResize from './windowResize.js';

const viewPortUnits = [VIEWPORT_HEIGHT, VIEWPORT_WIDTH, VIEWPORT_MIN];
const fontBasedUnits = [EM, EX, CH];
const pixelBasedUnits = [PIXELS,
	INCHES,
	CENTIMETERS,
	MILLIMETERS,
	PICAS,
	POINTS];
const fixedUnits = pixelBasedUnits.concat(fontBasedUnits, viewPortUnits, ROOT_EM);

const NUMERIC_VALUE = '^[0-9+-.E]+';
const NUMERIC_REGEX = new RegExp(NUMERIC_VALUE, 'u');
const CSS_SIZE_REGEX = new RegExp(NUMERIC_VALUE + '(' + fixedUnits.concat(PERCENT)
	.join('|') + ')$', 'u');

const unitlessSizesMap = [AUTO, INITIAL, INHERIT, NONE]
	.reduce((result, value) => {
		result[value] = true;
		return result;
	}, {});

const validSizesMap = { ...unitlessSizesMap };
validSizesMap[ZERO_PIXELS] = true;

let oneRem = 0;
const pixelBasedUnitMeasurements = {};
const viewPortUnitMeasurements = {};
const getMeasurement = (save, units, unit, element) => {
	return save[unit] || measureCssUnits(units, save, element) || save[unit];
};

let currentWindowWidth = 0;
let currentWindowHeight = 0;
windowResize.trigger(windowResize.add((width, height) => {
	if (currentWindowWidth !== width || currentWindowHeight !== height) {
		currentWindowWidth = width;
		currentWindowHeight = height;

		measureCssUnits(viewPortUnits, viewPortUnitMeasurements);
	}
}));

const _ = new PrivateVars();

/**
 * @class CssSize
 * @classdesc A class for handling css size conversions
 * @example
 * ``` javascript
 * import { CssSize } from 'type-enforcer-ui';
 * ```
 *
 * @param {string} [size=0]
 */
export default class CssSize {
	constructor(size) {
		if (size !== undefined) {
			_.set(this, { size: ZERO_PIXELS });

			this.set(size);
		}
	}

	/**
	 * Determine if something is a valid css size.
	 *
	 * @memberOf CssSize
	 *
	 * @param {*} value - A value to check.
	 *
	 * @returns {boolean}
	 */
	static isValid(value) {
		return (isString(value) &&
			(validSizesMap[value] || CSS_SIZE_REGEX.test(value) || isNonZeroNumber(value))) ||
			isFloat(value) ||
			value instanceof CssSize;
	}

	/**
	 * Set the value.
	 *
	 * @memberOf CssSize
	 * @instance
	 * @chainable
	 *
	 * @param {string} size - A valid css size, ie '32px', '1rem', 'auto', etc.
	 *
	 * @returns {this}
	 */
	set(size) {
		Object.assign(_(this) || _.set(this), _(size) || {
			size: CssSize.isValid(size) ? size + (isNonZeroNumber(size) ? PIXELS : '') : ZERO_PIXELS,
			units: undefined,
			value: undefined,
			pixelsValue: undefined,
			fontBasedUnits: {}
		});

		return this;
	}

	/**
	 * Get the units portion of the current value.
	 *
	 * @memberOf CssSize
	 * @instance
	 *
	 * @returns {string}
	 */
	get units() {
		const _self = _(this);

		if (_self === undefined) {
			return '';
		}

		if (_self.units === undefined && !unitlessSizesMap[_self.size]) {
			_self.units = _self.size.replace(NUMERIC_REGEX, '');
		}

		return _self.units;
	}

	/**
	 * Get the numeric portion of the current value.
	 *
	 * @memberOf CssSize
	 * @instance
	 *
	 * @returns {number}
	 */
	get value() {
		const _self = _(this);

		if (_self === undefined) {
			return 0;
		}

		if (_self.value === undefined && !unitlessSizesMap[_self.size]) {
			_self.value = parseFloat(_self.size);
		}

		return _self.value;
	}

	/**
	 * Get the pixel equivalent of the current value.
	 *
	 * @memberOf CssSize
	 * @instance
	 *
	 * @param {boolean} [getNumber=false] - If true then return a number, else a string with 'px' on the end.
	 *
	 * @returns {number | string}
	 */
	toPixels(getNumber = false) {
		const _self = _(this);

		if (_self === undefined) {
			return getNumber ? 0 : '0';
		}

		if (_self.pixelsValue === undefined) {
			if (unitlessSizesMap[_self.size]) {
				_self.pixelsValue = _self.size;
			}
			else if (this.isPercent) {
				_self.pixelsValue = _self.size;
			}
			else {
				const units = this.units;

				if (units === ROOT_EM) {
					_self.pixelsValue = oneRem || (oneRem = parseFloat(window.getComputedStyle(document.documentElement).fontSize));
				}
				else if (pixelBasedUnits.includes(units)) {
					_self.pixelsValue = getMeasurement(pixelBasedUnitMeasurements, pixelBasedUnits, units);
				}
				else if (viewPortUnits.includes(units)) {
					_self.pixelsValue = getMeasurement(viewPortUnitMeasurements, viewPortUnits, units);
				}
				else if (fontBasedUnits.includes(units)) {
					_self.fontBasedUnits = _self.fontBasedUnits || {};
					_self.pixelsValue = getMeasurement(_self.fontBasedUnits, fontBasedUnits, units, this.element());
				}
				else {
					_self.pixelsValue = 1;
				}

				_self.pixelsValue *= this.value || 0;
			}
		}

		return (getNumber === false && isNumber(_self.pixelsValue))
			? _self.pixelsValue + (_self.pixelsValue === 0 ? '' : PIXELS)
			: _self.pixelsValue;
	}

	/**
	 * Determine if the current value is 'auto'.
	 *
	 * @memberOf CssSize
	 * @instance
	 *
	 * @returns {boolean}
	 */
	get isAuto() {
		return _(this) !== undefined && _(this).size === AUTO;
	}

	/**
	 * Determine if the current value is a fixed size.
	 *
	 * @memberOf CssSize
	 * @instance
	 *
	 * @returns {boolean}
	 */
	get isFixed() {
		return fixedUnits.includes(this.units);
	}

	/**
	 * Determine if the current value is a percent size.
	 *
	 * @memberOf CssSize
	 * @instance
	 *
	 * @returns {boolean}
	 */
	get isPercent() {
		return this.units === PERCENT;
	}

	/**
	 * Determine if another size is equivalent to this one.
	 *
	 * @memberOf CssSize
	 * @instance
	 *
	 * @param {CssSize | string} size - A value to check against this css sie.
	 *
	 * @returns {boolean}
	 */
	isSame(size) {
		return size instanceof CssSize ?
			size.toPixels(true) === this.toPixels(true) :
			size === (_(this) === undefined ? ZERO_PIXELS : _(this).size) ||
			(isNonZeroNumber(size) ?
				(parseFloat(size) === this.value && this.units === PIXELS) :
				size === 0 && (_(this) === undefined || _(this).size === ZERO_PIXELS));
	}

	/**
	 * Get the current value as a string.
	 *
	 * @memberOf CssSize
	 * @instance
	 *
	 * @returns {string}
	 */
	toString() {
		return _(this) === undefined ? '0' : _(this).size;
	}
}

Object.assign(CssSize.prototype, {
	/**
	 * Set the element to measure font based units against.
	 *
	 * @method
	 * @memberOf CssSize
	 * @instance
	 *
	 * @param {Element} [element] - A DOM element.
	 *
	 * @returns {this|Element}
	 */
	element: methodElement({
		set() {
			const _self = _(this) || _.set(this, { size: ZERO_PIXELS });
			_self.fontBasedUnits = {};
		}
	})
});
