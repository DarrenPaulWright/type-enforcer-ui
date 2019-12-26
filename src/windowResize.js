import { debounce, throttle } from 'async-agent';
import { Queue } from 'type-enforcer';

let windowWidth = 0;
let windowHeight = 0;
let triggerAll;

/**
 * @class windowResize
 * @extends [Queue](https://github.com/DarrenPaulWright/type-enforcer/blob/master/docs/Queue.md)
 * @hideconstructor
 * @classdesc Executes callbacks whenever the screen is resized (throttled at 100ms) or explicitly triggered
 */
class windowResize extends Queue {
	constructor() {
		super();

		const measureWindow = () => {
			windowWidth = window.innerWidth;
			windowHeight = window.innerHeight;
			this.trigger();
		};

		window.addEventListener('resize', throttle(measureWindow, 100));

		triggerAll = debounce(() => {
			super.trigger(null, [windowWidth, windowHeight]);
		});

		measureWindow();
	}

	/**
	 * Triggers one or all callbacks. Two arguments are passed to the callback: width and height. If an id is provided then the callback is called immediately, otherwise the call is debounced.
	 *
	 * @arg {Number} [id] - To trigger only a specific callback, provide the id returned by windowResize.add().
	 *     Otherwise all callbacks are called.
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

export default new windowResize();
