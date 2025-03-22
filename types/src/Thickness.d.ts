type CoercibleToThicknessArgs = [CoercibleToCssSize] |
    [CoercibleToCssSize, CoercibleToCssSize] |
    [CoercibleToCssSize, CoercibleToCssSize, CoercibleToCssSize] |
    [CoercibleToCssSize, CoercibleToCssSize, CoercibleToCssSize, CoercibleToCssSize];

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
    /**
     * Determine if something is a valid Thickness.
     *
     * @memberOf Thickness
     *
     * @param {...string | ...number | Array | Thickness} [args] - Can be multiple numbers as pixels (1, 2,3 , 4) or multiple strings ('1px', '2rem') or an array of similar numbers or strings or another thickness.
     *
     * @returns {boolean}
     */
    static isValid(...args: any[]): boolean;

    constructor(...args: CoercibleToThicknessArgs);

    /**
     * Set the sizes of all sides.
     *
     * @memberOf Thickness
     * @instance
     *
     * @param {...string | ...number | Array | Thickness} [args] - Can be multiple numbers as pixels (1, 2,3 , 4) or multiple strings ('1px', '2rem') or an array of similar numbers or strings or another thickness.
     */
    set(...args: CoercibleToThicknessArgs): void;

    set top(arg: CoercibleToCssSize);

    /**
     * The top size.
     *
     * @memberOf Thickness
     * @instance
     *
     * @type {CssSize}
     */
    get top(): CssSize;

    set right(arg: CoercibleToCssSize);

    /**
     * The right size.
     *
     * @memberOf Thickness
     * @instance
     *
     * @type {CssSize}
     */
    get right(): CssSize;

    set bottom(arg: CoercibleToCssSize);

    /**
     * The bottom size.
     *
     * @memberOf Thickness
     * @instance
     *
     * @type {CssSize}
     */
    get bottom(): CssSize;

    set left(arg: CoercibleToCssSize);

    /**
     * The left size.
     *
     * @memberOf Thickness
     * @instance
     *
     * @type {CssSize}
     */
    get left(): CssSize;

    /**
     * Get the sum of the right and left.
     *
     * @memberOf Thickness
     * @instance
     * @readonly
     *
     * @type {number}
     */
    readonly get horizontal(): number;

    /**
     * Get the sum of the top and bottom.
     *
     * @memberOf Thickness
     * @instance
     * @readonly
     *
     * @type {number}
     */
    readonly get vertical(): number;

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
    isSame(thickness: Thickness | string): boolean;

    /**
     * Get this thickness as a space separated string.
     *
     * @memberOf Thickness
     * @instance
     *
     * @returns {string}
     */
    toString(): string;

    element(value: HTMLElement, isForceSave?: boolean): this;
    element(): HTMLElement;
}
import CssSize, { CoercibleToCssSize } from './CssSize.js';
