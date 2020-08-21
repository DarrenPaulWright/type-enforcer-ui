import { assert } from 'type-enforcer';
import isElementInDom from '../src/utility/isElementInDom.js';

describe('isElementInDom', () => {
	it('should return false for nothing', () => {
		assert.is(isElementInDom(), false);
	});
	it('should return false for a undefined', () => {
		assert.is(isElementInDom(undefined), false);
	});
	it('should return false for a string', () => {
		assert.is(isElementInDom('test'), false);
	});
	it('should return false for an element that isn\'t in the Dom', () => {
		const element = document.createElement('div');
		assert.is(isElementInDom(element), false);
	});
	it('should return true for an element that is in the Dom', () => {
		const element = document.createElement('div');
		document.body.appendChild(element);
		assert.is(isElementInDom(element), true);
	});
});
