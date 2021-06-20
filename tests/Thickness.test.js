import { assert } from 'type-enforcer';
import { multiTest } from 'type-enforcer-test-helper';
import { Thickness } from '../index.js';
import { thicknessData as data } from './helpers/testValues.js';

describe('Thickness', () => {
	describe('init', () => {
		it('should default to zeros when instantiated', () => {
			const thickness = new Thickness();

			assert.is(thickness.top, 0);
			assert.is(thickness.right, 0);
			assert.is(thickness.bottom, 0);
			assert.is(thickness.left, 0);
		});

		it('should accept a single number when instantiated', () => {
			const thickness = new Thickness(3);

			assert.is(thickness.top, 3);
			assert.is(thickness.right, 3);
			assert.is(thickness.bottom, 3);
			assert.is(thickness.left, 3);
		});

		it('should accept two numbers when instantiated', () => {
			const thickness = new Thickness(3, 5);

			assert.is(thickness.top, 3);
			assert.is(thickness.right, 5);
			assert.is(thickness.bottom, 3);
			assert.is(thickness.left, 5);
		});

		it('should accept three numbers when instantiated', () => {
			const thickness = new Thickness(3, 5, 8);

			assert.is(thickness.top, 3);
			assert.is(thickness.right, 5);
			assert.is(thickness.bottom, 8);
			assert.is(thickness.left, 5);
		});

		it('should accept four numbers when instantiated', () => {
			const thickness = new Thickness(3, 5, 8, 12);

			assert.is(thickness.top, 3);
			assert.is(thickness.right, 5);
			assert.is(thickness.bottom, 8);
			assert.is(thickness.left, 12);
		});

		it('should accept a string with a single number when instantiated', () => {
			const thickness = new Thickness('3');

			assert.is(thickness.top, 3);
			assert.is(thickness.right, 3);
			assert.is(thickness.bottom, 3);
			assert.is(thickness.left, 3);
		});

		it('should accept a string with two numbers when instantiated', () => {
			const thickness = new Thickness('3, 5');

			assert.is(thickness.top, 3);
			assert.is(thickness.right, 5);
			assert.is(thickness.bottom, 3);
			assert.is(thickness.left, 5);
		});

		it('should accept a string with three numbers when instantiated', () => {
			const thickness = new Thickness('3 5 8');

			assert.is(thickness.top, 3);
			assert.is(thickness.right, 5);
			assert.is(thickness.bottom, 8);
			assert.is(thickness.left, 5);
		});

		it('should accept a string with four numbers when instantiated', () => {
			const thickness = new Thickness('3, 5, 8, 12');

			assert.is(thickness.top, 3);
			assert.is(thickness.right, 5);
			assert.is(thickness.bottom, 8);
			assert.is(thickness.left, 12);
		});
	});

	describe('.set', () => {
		it('should accept another Thickness instance', () => {
			const thickness = new Thickness(3, 4, 5, 6);

			thickness.set(new Thickness(7, 8, 9, 10));

			assert.is(thickness.top, 7);
			assert.is(thickness.right, 8);
			assert.is(thickness.bottom, 9);
			assert.is(thickness.left, 10);
		});
	});

	describe('.vertical', () => {
		it('should add the top and bottom when vertical is called', () => {
			const thickness = new Thickness(3, 4, 5, 6);

			assert.is(thickness.vertical, 8);
		});
	});

	describe('.horizontal', () => {
		it('should add the left and right when horizontal is called', () => {
			const thickness = new Thickness(3, 4, 5, 6);

			assert.is(thickness.horizontal, 10);
		});
	});

	describe('.isValid', () => {
		it('should return false if nothing is provided', () => {
			assert.is(Thickness.isValid(), false);
		});

		it('should return true for an instance of Thickness', () => {
			assert.is(Thickness.isValid(new Thickness(0)), true);
		});

		it('should return true for one number', () => {
			assert.is(Thickness.isValid(1), true);
		});

		it('should return true for two numbers', () => {
			assert.is(Thickness.isValid(1, 2), true);
		});

		it('should return true for three numbers', () => {
			assert.is(Thickness.isValid(1, 2, 3), true);
		});

		it('should return true for four numbers', () => {
			assert.is(Thickness.isValid(1, 2, 3, 4), true);
		});

		it('should return true for two css values', () => {
			assert.is(Thickness.isValid('1px', '2px'), true);
		});

		it('should return true for three css values', () => {
			assert.is(Thickness.isValid('1px', '2px', '3px'), true);
		});

		it('should return true for four css values', () => {
			assert.is(Thickness.isValid('1px', '2px', '3px', '4px'), true);
		});

		it('should return false for a string with bad css values', () => {
			assert.is(Thickness.isValid('1px asdf 3px 4px'), false);
		});

		const testCallback = (value) => Thickness.isValid(value);
		multiTest({
			values: data.coerceTrue,
			test: testCallback,
			assertion: 'true'
		});
		multiTest({
			values: data.true,
			test: testCallback,
			assertion: 'true'
		});
		multiTest({
			values: data.coerceFalse,
			test: testCallback,
			assertion: 'false'
		});
	});

	describe('.toString', () => {
		it('should add "px" to each side', () => {
			const thickness = new Thickness(3, 4, 5, 6);

			assert.is(thickness.toString(), '3px 4px 5px 6px');
		});

		it('should convert css units on each side', () => {
			const thickness = new Thickness('2pc 3em 4pc 5pc');

			assert.is(thickness.toString(), '32px 48px 64px 80px');
		});

		it('should combine all sides into one if they are the same', () => {
			const thickness = new Thickness(3, 3, 3, 3);

			assert.is(thickness.toString(), '3px');
		});

		it('should combine all sides into one if left is different', () => {
			const thickness = new Thickness(3, 3, 3, 4);

			assert.is(thickness.toString(), '3px 3px 3px 4px');
		});

		it('should combine all sides into one if bottom is different', () => {
			const thickness = new Thickness(3, 3, 4, 3);

			assert.is(thickness.toString(), '3px 3px 4px');
		});

		it('should combine all sides into one if right is different', () => {
			const thickness = new Thickness(3, 4, 3, 3);

			assert.is(thickness.toString(), '3px 4px 3px 3px');
		});

		it('should combine top/bottom and left/right if they are the same', () => {
			const thickness = new Thickness(3, 5, 3, 5);

			assert.is(thickness.toString(), '3px 5px');
		});

		it('should combine left/right if they are the same', () => {
			const thickness = new Thickness(3, 5, 4, 5);

			assert.is(thickness.toString(), '3px 5px 4px');
		});

		it('should convert non-pixel units and merge them', () => {
			const thickness = new Thickness('16px 4rem 1rem');

			assert.is(thickness.toString(), '16px 64px');
		});

		it('should convert non-pixel units', () => {
			const thickness = new Thickness('12px 4rem');

			assert.is(thickness.toString(), '12px 64px');
		});
	});

	describe('.element', () => {
		it('should measure font sizes if an element is set', () => {
			const thickness = new Thickness('2em 3em');
			const element = document.createElement('div');

			element.style.fontSize = '16px';
			document.body.appendChild(element);

			thickness.element(element);

			assert.is(thickness.toString(), '32px 48px');
		});
	});

	describe('.isSame', () => {
		it('should return true for another same Thickness', () => {
			assert.is(new Thickness('32px 48px').isSame(new Thickness('32px 48px')), true);
		});
		it('should return true for a string that is the same', () => {
			assert.is(new Thickness('32px 48px').isSame('32px 48px'), true);
		});
		it('should return false for a different Thickness', () => {
			assert.is(new Thickness('32px 48px').isSame(new Thickness('48px')), false);
		});
	});
});
