import { wait } from 'async-agent';
import { assert } from 'type-enforcer';
import { windowResize } from '../index.js';

describe('windowResize', () => {
	const windowWidth = window.innerWidth;
	const windowHeight = window.innerHeight;

	it('should have height and width', () => {
		assert.is(windowResize.width === windowWidth, true);
		assert.is(windowResize.height === windowHeight, true);
	});

	it('should trigger a single callback if an id is provided', () => {
		let count = 0;
		windowResize.add((width, height) => {
			if (width === windowWidth && height === windowHeight) {
				count++;
			}
		});
		const id = windowResize.add((width, height) => {
			if (width === windowWidth && height === windowHeight) {
				count++;
			}
		});
		windowResize.add((width, height) => {
			if (width === windowWidth && height === windowHeight) {
				count++;
			}
		});

		windowResize.trigger(id);

		assert.is(count, 1);
	});

	it('should trigger all callbacks once if no id is provided', () => {
		let count = 0;
		windowResize.add((width, height) => {
			if (width === windowWidth && height === windowHeight) {
				count++;
			}
		});
		windowResize.add((width, height) => {
			if (width === windowWidth && height === windowHeight) {
				count++;
			}
		});
		windowResize.add((width, height) => {
			if (width === windowWidth && height === windowHeight) {
				count++;
			}
		});

		windowResize.trigger();
		windowResize.trigger();
		windowResize.trigger();

		return wait(1)
			.then(() => {
				assert.is(count, 3);
			});
	});
});
