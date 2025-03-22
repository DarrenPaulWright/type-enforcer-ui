export type CoercibleToCssSize = string | number | CssSize;

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
    /**
     * Determine if something is a valid css size.
     *
     * @memberOf CssSize
     *
     * @param {unknown} value - A value to check.
     *
     * @returns {boolean}
     */
    static isValid(value: unknown): boolean;
    constructor(size?: CoercibleToCssSize);
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
    set(size: CoercibleToCssSize): this;
    /**
     * Get the units portion of the current value.
     *
     * @memberOf CssSize
     * @instance
     *
     * @returns {string}
     */
    get units(): string;
    /**
     * Get the numeric portion of the current value.
     *
     * @memberOf CssSize
     * @instance
     *
     * @returns {number}
     */
    get value(): number;
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
    toPixels(): string;
    toPixels(getNumber: false): string;
    toPixels(getNumber: true): number;
    /**
     * Determine if the current value is 'auto'.
     *
     * @memberOf CssSize
     * @instance
     *
     * @returns {boolean}
     */
    get isAuto(): boolean;
    /**
     * Determine if the current value is a fixed size.
     *
     * @memberOf CssSize
     * @instance
     *
     * @returns {boolean}
     */
    get isFixed(): boolean;
    /**
     * Determine if the current value is a percent size.
     *
     * @memberOf CssSize
     * @instance
     *
     * @returns {boolean}
     */
    get isPercent(): boolean;
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
    isSame(size: CoercibleToCssSize): boolean;
    /**
     * Get the current value as a string.
     *
     * @memberOf CssSize
     * @instance
     *
     * @returns {string}
     */
    toString(): string;

    element(value: HTMLElement, isForceSave?: boolean): this;
    element(): HTMLElement;
}
