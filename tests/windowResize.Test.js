import { wait } from 'async-agent';
import { assert } from 'chai';
import { windowResize } from '../index.js';

describe('windowResize', () => {
	const windowWidth = window.innerWidth;
	const windowHeight = window.innerHeight;

	it('should have height and width', () => {
		assert.isTrue(windowResize.width === windowWidth);
		assert.isTrue(windowResize.height === windowHeight);
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

		assert.equal(count, 1);
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
				assert.equal(count, 3);
			});
	});
});
