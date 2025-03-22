export default windowResize;
declare const windowResize: WindowResize;
/**
 * @class windowResize
 * @extends [Queue](https://github.com/DarrenPaulWright/type-enforcer/blob/master/docs/Queue.md)
 * @hideconstructor
 * @classdesc Executes callbacks whenever the screen is resized (throttled at 100ms) or explicitly triggered
 */
declare class WindowResize extends Queue {
    /**
     * Triggers one or all callbacks. Two arguments are passed to the callback: width and height. If an id is provided then the callback is called immediately, otherwise the call is debounced.
     *
     * @param {number} [id] - To trigger only a specific callback, provide the id returned by windowResize.add(). Otherwise all callbacks are called.
     */
    trigger(id?: number): void;

    /**
     * Get the current width of the window.
     *
     * @readonly
     *
     * @returns {number}
     */
    readonly get width(): number;

    /**
     * Get the current height of the window.
     *
     * @readonly
     *
     * @returns {number}
     */
    readonly get height(): number;
}
import {Queue} from 'type-enforcer';
