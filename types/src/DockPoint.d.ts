declare const BASIC_POINTS = {
    TOP = 'top',
    RIGHT = 'right',
    BOTTOM = 'bottom',
    LEFT = 'left',
    CENTER = 'center',
    NONE = ''
}

declare const POINTS = {
    TOP = 'top',
    RIGHT = 'right',
    BOTTOM = 'bottom',
    LEFT = 'left',
    CENTER = 'center',
    NONE = '',
    TOP_LEFT = BASIC_POINTS.TOP + SEPARATOR + BASIC_POINTS.LEFT,
    TOP_CENTER = BASIC_POINTS.TOP + SEPARATOR + BASIC_POINTS.CENTER,
    TOP_RIGHT = BASIC_POINTS.TOP + SEPARATOR + BASIC_POINTS.RIGHT,
    RIGHT_TOP = BASIC_POINTS.RIGHT + SEPARATOR + BASIC_POINTS.TOP,
    RIGHT_CENTER = BASIC_POINTS.RIGHT + SEPARATOR + BASIC_POINTS.CENTER,
    RIGHT_BOTTOM = BASIC_POINTS.RIGHT + SEPARATOR + BASIC_POINTS.BOTTOM,
    BOTTOM_RIGHT = BASIC_POINTS.BOTTOM + SEPARATOR + BASIC_POINTS.RIGHT,
    BOTTOM_CENTER = BASIC_POINTS.BOTTOM + SEPARATOR + BASIC_POINTS.CENTER,
    BOTTOM_LEFT = BASIC_POINTS.BOTTOM + SEPARATOR + BASIC_POINTS.LEFT,
    LEFT_BOTTOM = BASIC_POINTS.LEFT + SEPARATOR + BASIC_POINTS.BOTTOM,
    LEFT_CENTER = BASIC_POINTS.LEFT + SEPARATOR + BASIC_POINTS.CENTER,
    LEFT_TOP = BASIC_POINTS.LEFT + SEPARATOR + BASIC_POINTS.TOP
}

/**
 * @class DockPoint
 * @classdesc Allows the designation of a specific point relative to an object.
 * @example
 * ``` javascript
 * import { DockPoint } from 'type-enforcer-ui';
 * ```
 *
 * @param {string} [value=DockPoint.POINTS.TOP_CENTER] - Anything from DockPoint.POINTS
 */
declare class DockPoint {
    static BASIC_POINTS = BASIC_POINTS;
    static POINTS = POINTS;

    /**
     * Determine if something is a valid dock point.
     *
     * @memberOf DockPoint
     *
     * @param {unknown} value - S value to check.
     *
     * @returns {boolean}
     */
    static isValid(value: unknown): boolean;

    constructor(value?: POINTS[keyof POINTS]);

    /**
     * Get a new DockPoint with the opposite value.
     *
     * @memberOf DockPoint
     * @readonly
     * @instance
     *
     * @returns {DockPoint}
     */
    readonly get opposite(): DockPoint;

    /**
     * Get the opposite of the current primary.
     *
     * @memberOf DockPoint
     * @readonly
     * @instance
     *
     * @returns {string} DockPoint.BASIC_POINTS.
     */
    readonly get oppositePrimary(): POINTS[keyof POINTS];

    /**
     * Get the opposite of the current secondary.
     *
     * @memberOf DockPoint
     * @readonly
     * @instance
     *
     * @returns {string} DockPoint.BASIC_POINTS.
     */
    readonly get oppositeSecondary(): POINTS[keyof POINTS];

    /**
     * Determine either the primary or secondary is equivalent to a value.
     *
     * @memberOf DockPoint
     * @instance
     *
     * @param {string} value - DockPoint.BASIC_POINTS.
     *
     * @returns {boolean}
     */
    has(value: BASIC_POINTS[keyof BASIC_POINTS]): boolean;

    /**
     * Set the left or right value to the opposite, whether it's the primary or secondary.
     *
     * @memberOf DockPoint
     * @instance
     */
    swapHorizontal(): void;

    /**
     * Set the top or bottom value to the opposite, whether it's the primary or secondary.
     *
     * @memberOf DockPoint
     * @instance
     */
    swapVertical(): void;

    /**
     * Determine if another DockPoint is equivalent to this one.
     *
     * @memberOf DockPoint
     * @instance
     *
     * @param {DockPoint | string} dockPoint - A value to compare to this one.
     *
     * @returns {boolean}
     */
    isSame(dockPoint: DockPoint | POINTS[keyof POINTS]): boolean;

    /**
     * Get the current value as a string.
     *
     * @memberOf DockPoint
     * @instance
     *
     * @returns {string}
     */
    toString(): string;

    primary(value: BASIC_POINTS[keyof BASIC_POINTS], isForceSave?: boolean): this;
    primary(): BASIC_POINTS[keyof BASIC_POINTS];

    secondary(value: BASIC_POINTS[keyof BASIC_POINTS], isForceSave?: boolean): this;
    secondary(): BASIC_POINTS[keyof BASIC_POINTS];

    value(value: POINTS[keyof POINTS], isForceSave?: boolean): this;
    value(): POINTS[keyof POINTS];
}
export default DockPoint;
