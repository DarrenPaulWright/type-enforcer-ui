import { debounce, throttle } from 'async-agent';
import { Queue } from 'type-enforcer';

let windowWidth = 0;
let windowHeight = 0;
let triggerAll = () => {
};

/* eslint-disable jsdoc/valid-types */
/**
 * @class windowResize
 * @extends [Queue](https://github.com/DarrenPaulWright/type-enforcer/blob/master/docs/Queue.md)
 * @hideconstructor
 * @classdesc Executes callbacks whenever the screen is resized (throttled at 100ms) or explicitly triggered
 */
class WindowResize extends Queue {
	constructor() {
		super();

		const measureWindow = () => {
			windowWidth = (typeof window === 'undefined') ? 0 : window.innerWidth;
			windowHeight = (typeof window === 'undefined') ? 0 : window.innerHeight;
			this.trigger();
		};

		if (typeof window !== 'undefined') {
			window.addEventListener('resize', throttle(measureWindow, 100));
		}

		triggerAll = debounce(() => {
			super.trigger(null, [windowWidth, windowHeight]);
		});

		measureWindow();
	}

	/**
	 * Triggers one or all callbacks. Two arguments are passed to the callback: width and height. If an id is provided then the callback is called immediately, otherwise the call is debounced.
	 *
	 * @param {number} [id] - To trigger only a specific callback, provide the id returned by windowResize.add(). Otherwise all callbacks are called.
	 */
	trigger(id) {
		if (id) {
			super.trigger(id, [windowWidth, windowHeight]);
		}
		else {
			triggerAll();
		}
	}

	/**
	 * Get the current width of the window.
	 *
	 * @readonly
	 *
	 * @returns {number}
	 */
	get width() {
		return windowWidth;
	}

	/**
	 * Get the current height of the window.
	 *
	 * @readonly
	 *
	 * @returns {number}
	 */
	get height() {
		return windowHeight;
	}
}

const windowResize = new WindowResize();

export default windowResize;
