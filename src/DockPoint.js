import { firstInPath, tailInPath } from 'object-agent';
import { enforceEnum, Enum, methodEnum, PrivateVars } from 'type-enforcer';

const SEPARATOR = '.';
const NONE = '';
const BASIC_POINTS = new Enum({
	TOP: 'top',
	RIGHT: 'right',
	BOTTOM: 'bottom',
	LEFT: 'left',
	CENTER: 'center',
	NONE: NONE
});
const POINTS = new Enum({
	...BASIC_POINTS,
	TOP_LEFT: BASIC_POINTS.TOP + SEPARATOR + BASIC_POINTS.LEFT,
	TOP_CENTER: BASIC_POINTS.TOP + SEPARATOR + BASIC_POINTS.CENTER,
	TOP_RIGHT: BASIC_POINTS.TOP + SEPARATOR + BASIC_POINTS.RIGHT,
	RIGHT_TOP: BASIC_POINTS.RIGHT + SEPARATOR + BASIC_POINTS.TOP,
	RIGHT_CENTER: BASIC_POINTS.RIGHT + SEPARATOR + BASIC_POINTS.CENTER,
	RIGHT_BOTTOM: BASIC_POINTS.RIGHT + SEPARATOR + BASIC_POINTS.BOTTOM,
	BOTTOM_RIGHT: BASIC_POINTS.BOTTOM + SEPARATOR + BASIC_POINTS.RIGHT,
	BOTTOM_CENTER: BASIC_POINTS.BOTTOM + SEPARATOR + BASIC_POINTS.CENTER,
	BOTTOM_LEFT: BASIC_POINTS.BOTTOM + SEPARATOR + BASIC_POINTS.LEFT,
	LEFT_BOTTOM: BASIC_POINTS.LEFT + SEPARATOR + BASIC_POINTS.BOTTOM,
	LEFT_CENTER: BASIC_POINTS.LEFT + SEPARATOR + BASIC_POINTS.CENTER,
	LEFT_TOP: BASIC_POINTS.LEFT + SEPARATOR + BASIC_POINTS.TOP
});

const HORIZONTAL_POINTS = {};
HORIZONTAL_POINTS[POINTS.LEFT] = true;
HORIZONTAL_POINTS[POINTS.RIGHT] = true;

const VERTICAL_POINTS = {};
VERTICAL_POINTS[POINTS.TOP] = true;
VERTICAL_POINTS[POINTS.BOTTOM] = true;

const OPPOSITES = {};
OPPOSITES[POINTS.TOP] = POINTS.BOTTOM;
OPPOSITES[POINTS.RIGHT] = POINTS.LEFT;
OPPOSITES[POINTS.BOTTOM] = POINTS.TOP;
OPPOSITES[POINTS.LEFT] = POINTS.RIGHT;
OPPOSITES[POINTS.CENTER] = POINTS.CENTER;

const _ = new PrivateVars();

/**
 * @class DockPoint
 * @classdesc Allows the designation of a specific point relative to an object.
 * @example
 * ``` javascript
 * import { DockPoint } from 'type-enforcer-ui';
 * ```
 *
 * @arg {String} [value=DockPoint.POINTS.TOP_CENTER] - Anything from DockPoint.POINTS
 */
export default class DockPoint {
	constructor(value) {
		value = enforceEnum(value, POINTS, POINTS.NONE);

		_.set(this, {
			primary: firstInPath(value, SEPARATOR),
			secondary: tailInPath(value, SEPARATOR)
		});
	}

	/**
	 * Get a new DockPoint with the opposite value
	 *
	 * @memberOf DockPoint
	 * @readonly
	 * @instance
	 *
	 * @returns {DockPoint}
	 */
	get opposite() {
		return new DockPoint(this.oppositePrimary + (_(this).secondary ? SEPARATOR + this.oppositeSecondary : ''));
	}

	/**
	 * Get the opposite of the current primary
	 *
	 * @memberOf DockPoint
	 * @readonly
	 * @instance
	 *
	 * @returns {String} DockPoint.BASIC_POINTS
	 */
	get oppositePrimary() {
		return OPPOSITES[_(this).primary] || POINTS.NONE;
	}

	/**
	 * Get the opposite of the current secondary
	 *
	 * @memberOf DockPoint
	 * @readonly
	 * @instance
	 *
	 * @returns {String} DockPoint.BASIC_POINTS
	 */
	get oppositeSecondary() {
		return OPPOSITES[_(this).secondary] || POINTS.NONE;
	}

	/**
	 * Determine if something is a valid dock point
	 *
	 * @memberOf DockPoint
	 *
	 * @arg {*} value
	 *
	 * @returns {boolean}
	 */
	static isValid(value) {
		return value instanceof DockPoint || POINTS.has(value);
	}

	/**
	 * Determine either the primary or secondary is equivalent to a value
	 *
	 * @memberOf DockPoint
	 * @instance
	 *
	 * @arg {String} value - DockPoint.BASIC_POINTS
	 *
	 * @returns {boolean}
	 */
	has(value) {
		return _(this).primary === value || _(this).secondary === value;
	}

	/**
	 * Set the left or right value to the opposite, whether it's the primary or secondary
	 *
	 * @memberOf DockPoint
	 * @instance
	 */
	swapHorizontal() {
		if (HORIZONTAL_POINTS[_(this).primary]) {
			_(this).primary = this.oppositePrimary;
		}
		else {
			_(this).secondary = this.oppositeSecondary;
		}
	}

	/**
	 * Set the top or bottom value to the opposite, whether it's the primary or secondary
	 *
	 * @memberOf DockPoint
	 * @instance
	 */
	swapVertical() {
		if (VERTICAL_POINTS[_(this).primary]) {
			_(this).primary = this.oppositePrimary;
		}
		else {
			_(this).secondary = this.oppositeSecondary;
		}
	}

	/**
	 * Determine if another DockPoint is equivalent to this one
	 *
	 * @memberOf DockPoint
	 * @instance
	 *
	 * @arg {*} dockPoint
	 *
	 * @returns {boolean}
	 */
	isSame(dockPoint) {
		return dockPoint instanceof DockPoint && _(dockPoint).primary === _(this).primary && _(dockPoint).secondary === _(this).secondary || dockPoint === this.toString();
	}

	/**
	 * Get the current value as a string
	 *
	 * @memberOf DockPoint
	 * @instance
	 *
	 * @returns {String}
	 */
	toString() {
		return `${_(this).primary}${_(this).secondary !== POINTS.NONE ? SEPARATOR : ''}${_(this).secondary}`;
	}
}

/**
 * @const BASIC_POINTS
 * @static
 * @memberOf DockPoint
 * @type {Enum}
 */
DockPoint.BASIC_POINTS = BASIC_POINTS;
/**
 * @const POINTS
 * @static
 * @memberOf DockPoint
 * @type {Enum}
 */
DockPoint.POINTS = POINTS;

Object.assign(DockPoint.prototype, {
	/**
	 * The primary value
	 *
	 * @method
	 * @memberOf DockPoint
	 * @instance
	 *
	 * @arg {String} [value] - DockPoint.BASIC_POINTS
	 *
	 * @returns {this|String} DockPoint.BASIC_POINTS
	 */
	primary: methodEnum({
		enum: BASIC_POINTS,
		set(primary) {
			_(this).primary = primary;
		},
		get() {
			return _(this).primary;
		}
	}),
	/**
	 * The secondary value
	 *
	 * @method
	 * @memberOf DockPoint
	 * @instance
	 *
	 * @arg {String} [value] - DockPoint.BASIC_POINTS
	 *
	 * @returns {this|String} DockPoint.BASIC_POINTS
	 */
	secondary: methodEnum({
		enum: BASIC_POINTS,
		set(secondary) {
			_(this).secondary = secondary;
		},
		get() {
			return _(this).secondary;
		}
	}),
	/**
	 * The full value
	 *
	 * @method
	 * @memberOf DockPoint
	 * @instance
	 *
	 * @arg {String} [value] - DockPoint.POINTS
	 *
	 * @returns {this|String} DockPoint.POINTS
	 */
	value: methodEnum({
		enum: POINTS,
		set(value) {
			_(this).primary = firstInPath(value, SEPARATOR);
			_(this).secondary = tailInPath(value, SEPARATOR) || POINTS.NONE;
		},
		get() {
			return this.toString();
		}
	})
});
