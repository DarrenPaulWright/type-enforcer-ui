import { assert } from 'type-enforcer';
import { multiTest } from 'type-enforcer-test-helper';
import { DockPoint } from '../index.js';
import { dockPointData as data } from './helpers/testValues.js';

describe('DockPoint', () => {
	describe('.primary', () => {
		it('should accept a primary value alone', () => {
			const dockPoint = new DockPoint(DockPoint.POINTS.TOP);
			assert.is(dockPoint.value(), DockPoint.POINTS.TOP);
		});

		it('should set the value when primary is set', () => {
			const dockPoint = new DockPoint(DockPoint.POINTS.TOP_RIGHT);
			dockPoint.primary(DockPoint.POINTS.BOTTOM);
			assert.is(dockPoint.value(), DockPoint.POINTS.BOTTOM_RIGHT);
		});
	});

	describe('.secondary', () => {
		it('should be able to set the secondary to DockPoint.POINTS.NONE', () => {
			const dockPoint = new DockPoint(DockPoint.POINTS.TOP_RIGHT);
			dockPoint.secondary(DockPoint.POINTS.NONE);
			assert.is(dockPoint.value(), DockPoint.POINTS.TOP);
		});

		it('should set the value when secondary is set', () => {
			const dockPoint = new DockPoint(DockPoint.POINTS.TOP_RIGHT);
			dockPoint.secondary(DockPoint.POINTS.LEFT);
			assert.is(dockPoint.value(), DockPoint.POINTS.TOP_LEFT);
		});
	});

	describe('.has', () => {
		const dockPoint = new DockPoint();

		it('should return true for RIGHT if value is TOP_RIGHT', () => {
			dockPoint.value(DockPoint.POINTS.TOP_RIGHT);
			assert.is(dockPoint.has(DockPoint.POINTS.RIGHT), true);
		});

		it('should return true for TOP if value is TOP_RIGHT', () => {
			dockPoint.value(DockPoint.POINTS.TOP_RIGHT);
			assert.is(dockPoint.has(DockPoint.POINTS.TOP), true);
		});

		it('should return true for LEFT if value is TOP_LEFT', () => {
			dockPoint.value(DockPoint.POINTS.TOP_LEFT);
			assert.is(dockPoint.has(DockPoint.POINTS.LEFT), true);
		});

		it('should return true for TOP if value is TOP_LEFT', () => {
			dockPoint.value(DockPoint.POINTS.TOP_LEFT);
			assert.is(dockPoint.has(DockPoint.POINTS.TOP), true);
		});
	});

	describe('.swapHorizontal', () => {
		const dockPoint = new DockPoint();

		it('should change a primary if the primary is LEFT', () => {
			dockPoint.value(DockPoint.POINTS.LEFT_TOP)
				.swapHorizontal();
			assert.is(dockPoint.primary(), DockPoint.POINTS.RIGHT);
		});
		it('should change a primary if the primary is RIGHT', () => {
			dockPoint.value(DockPoint.POINTS.RIGHT_TOP)
				.swapHorizontal();
			assert.is(dockPoint.primary(), DockPoint.POINTS.LEFT);
		});
		it('should change a secondary if the secondary is LEFT', () => {
			dockPoint.value(DockPoint.POINTS.TOP_LEFT)
				.swapHorizontal();
			assert.is(dockPoint.secondary(), DockPoint.POINTS.RIGHT);
		});
		it('should change a secondary if the secondary is RIGHT', () => {
			dockPoint.value(DockPoint.POINTS.TOP_RIGHT)
				.swapHorizontal();
			assert.is(dockPoint.secondary(), DockPoint.POINTS.LEFT);
		});
	});

	describe('.swapVertical', () => {
		const dockPoint = new DockPoint();

		it('should change a primary if the primary is TOP', () => {
			dockPoint.value(DockPoint.POINTS.TOP_LEFT)
				.swapVertical();
			assert.is(dockPoint.primary(), DockPoint.POINTS.BOTTOM);
		});
		it('should change a primary if the primary is BOTTOM', () => {
			dockPoint.value(DockPoint.POINTS.BOTTOM_LEFT)
				.swapVertical();
			assert.is(dockPoint.primary(), DockPoint.POINTS.TOP);
		});
		it('should change a secondary if the secondary is TOP', () => {
			dockPoint.value(DockPoint.POINTS.LEFT_TOP)
				.swapVertical();
			assert.is(dockPoint.secondary(), DockPoint.POINTS.BOTTOM);
		});
		it('should change a secondary if the secondary is BOTTOM', () => {
			dockPoint.value(DockPoint.POINTS.LEFT_BOTTOM)
				.swapVertical();
			assert.is(dockPoint.secondary(), DockPoint.POINTS.TOP);
		});
	});

	describe('.opposite', () => {
		it('should return DockPoint.POINTS.BOTTOM_RIGHT if the value is TOP_LEFT', () => {
			const dockPoint = new DockPoint(DockPoint.POINTS.TOP_LEFT);
			assert.is(dockPoint.opposite.value(), DockPoint.POINTS.BOTTOM_RIGHT);
		});
		it('should return DockPoint.POINTS.BOTTOM_CENTER if the value is TOP_CENTER', () => {
			const dockPoint = new DockPoint(DockPoint.POINTS.TOP_CENTER);
			assert.is(dockPoint.opposite.value(), DockPoint.POINTS.BOTTOM_CENTER);
		});
		it('should return DockPoint.POINTS.BOTTOM if the value is TOP', () => {
			const dockPoint = new DockPoint(DockPoint.POINTS.TOP);
			assert.is(dockPoint.opposite.value(), DockPoint.POINTS.BOTTOM);
		});
	});

	describe('.oppositePrimary', () => {
		it('should return DockPoint.POINTS.BOTTOM if the value is TOP', () => {
			const dockPoint = new DockPoint(DockPoint.POINTS.TOP);
			assert.is(dockPoint.oppositePrimary, DockPoint.POINTS.BOTTOM);
		});
		it('should return DockPoint.POINTS.TOP if the value is BOTTOM', () => {
			const dockPoint = new DockPoint(DockPoint.POINTS.BOTTOM);
			assert.is(dockPoint.oppositePrimary, DockPoint.POINTS.TOP);
		});
		it('should return DockPoint.POINTS.LEFT if the value is RIGHT', () => {
			const dockPoint = new DockPoint(DockPoint.POINTS.RIGHT);
			assert.is(dockPoint.oppositePrimary, DockPoint.POINTS.LEFT);
		});
		it('should return DockPoint.POINTS.RIGHT if the value is LEFT', () => {
			const dockPoint = new DockPoint(DockPoint.POINTS.LEFT);
			assert.is(dockPoint.oppositePrimary, DockPoint.POINTS.RIGHT);
		});
		it('should return DockPoint.POINTS.BOTTOM if the value is TOP_LEFT', () => {
			const dockPoint = new DockPoint(DockPoint.POINTS.TOP_LEFT);
			assert.is(dockPoint.oppositePrimary, DockPoint.POINTS.BOTTOM);
		});
		it('should return DockPoint.POINTS.TOP if the value is BOTTOM_LEFT', () => {
			const dockPoint = new DockPoint(DockPoint.POINTS.BOTTOM_LEFT);
			assert.is(dockPoint.oppositePrimary, DockPoint.POINTS.TOP);
		});
		it('should return DockPoint.POINTS.LEFT if the value is RIGHT_TOP', () => {
			const dockPoint = new DockPoint(DockPoint.POINTS.RIGHT_TOP);
			assert.is(dockPoint.oppositePrimary, DockPoint.POINTS.LEFT);
		});
		it('should return DockPoint.POINTS.RIGHT if the value is LEFT_TOP', () => {
			const dockPoint = new DockPoint(DockPoint.POINTS.LEFT_TOP);
			assert.is(dockPoint.oppositePrimary, DockPoint.POINTS.RIGHT);
		});
		it('should return DockPoint.POINTS.NONE if the value is NONE', () => {
			const dockPoint = new DockPoint(DockPoint.POINTS.NONE);
			assert.is(dockPoint.oppositePrimary, DockPoint.POINTS.NONE);
		});
	});

	describe('.oppositeSecondary', () => {
		it('should return DockPoint.POINTS.NONE if the value is TOP', () => {
			const dockPoint = new DockPoint(DockPoint.POINTS.TOP);
			assert.is(dockPoint.oppositeSecondary, DockPoint.POINTS.NONE);
		});
		it('should return DockPoint.POINTS.TOP if the value is BOTTOM', () => {
			const dockPoint = new DockPoint(DockPoint.POINTS.BOTTOM);
			assert.is(dockPoint.oppositeSecondary, DockPoint.POINTS.NONE);
		});
		it('should return DockPoint.POINTS.LEFT if the value is RIGHT', () => {
			const dockPoint = new DockPoint(DockPoint.POINTS.RIGHT);
			assert.is(dockPoint.oppositeSecondary, DockPoint.POINTS.NONE);
		});
		it('should return DockPoint.POINTS.RIGHT if the value is LEFT', () => {
			const dockPoint = new DockPoint(DockPoint.POINTS.LEFT);
			assert.is(dockPoint.oppositeSecondary, DockPoint.POINTS.NONE);
		});
		it('should return DockPoint.POINTS.RIGHT if the value is TOP_LEFT', () => {
			const dockPoint = new DockPoint(DockPoint.POINTS.TOP_LEFT);
			assert.is(dockPoint.oppositeSecondary, DockPoint.POINTS.RIGHT);
		});
		it('should return DockPoint.POINTS.TOP if the value is TOP_RIGHT', () => {
			const dockPoint = new DockPoint(DockPoint.POINTS.TOP_RIGHT);
			assert.is(dockPoint.oppositeSecondary, DockPoint.POINTS.LEFT);
		});
		it('should return DockPoint.POINTS.LEFT if the value is RIGHT_TOP', () => {
			const dockPoint = new DockPoint(DockPoint.POINTS.RIGHT_TOP);
			assert.is(dockPoint.oppositeSecondary, DockPoint.POINTS.BOTTOM);
		});
		it('should return DockPoint.POINTS.RIGHT if the value is RIGHT_BOTTOM', () => {
			const dockPoint = new DockPoint(DockPoint.POINTS.RIGHT_BOTTOM);
			assert.is(dockPoint.oppositeSecondary, DockPoint.POINTS.TOP);
		});
		it('should return DockPoint.POINTS.CENTER if the value is RIGHT_CENTER', () => {
			const dockPoint = new DockPoint(DockPoint.POINTS.RIGHT_CENTER);
			assert.is(dockPoint.oppositeSecondary, DockPoint.POINTS.CENTER);
		});
		it('should return DockPoint.POINTS.NONE if the value is NONE', () => {
			const dockPoint = new DockPoint(DockPoint.POINTS.NONE);
			assert.is(dockPoint.oppositeSecondary, DockPoint.POINTS.NONE);
		});
	});

	describe('.isSame', () => {
		it('should return true if the same value is provided as a string', () => {
			const dockPoint = new DockPoint(DockPoint.POINTS.TOP_LEFT);
			assert.is(dockPoint.isSame(DockPoint.POINTS.TOP_LEFT), true);
		});

		it('should return false if a different value is provided as a string', () => {
			const dockPoint = new DockPoint(DockPoint.POINTS.TOP_LEFT);
			assert.is(dockPoint.isSame(DockPoint.POINTS.TOP_RIGHT), false);
		});

		it('should return true if the same value is provided as a DockPoint', () => {
			const dockPoint = new DockPoint(DockPoint.POINTS.TOP_LEFT);
			assert.is(dockPoint.isSame(new DockPoint(DockPoint.POINTS.TOP_LEFT)), true);
		});

		it('should return false if a different value is provided as a DockPoint', () => {
			const dockPoint = new DockPoint(DockPoint.POINTS.TOP_LEFT);
			assert.is(dockPoint.isSame(new DockPoint(DockPoint.POINTS.TOP_RIGHT)), false);
		});
	});

	describe('.toString', () => {
		it('should return the same string as .value()', () => {
			const dockPoint = new DockPoint(DockPoint.POINTS.TOP_LEFT);
			assert.is(dockPoint.toString(), dockPoint.value());
		});
	});

	describe('.isValid', () => {
		const testCallback = (value) => DockPoint.isValid(value);
		multiTest({
			values: data.true,
			test: testCallback,
			assertion: 'true'
		});
		multiTest({
			values: data.false,
			test: testCallback,
			assertion: 'false'
		});
	});
});
