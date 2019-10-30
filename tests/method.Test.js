import { testMethod } from 'type-enforcer-test-helper';
import {
	CssSize,
	DockPoint,
	method,
	methodCssSize,
	methodDockPoint,
	methodElement,
	methodThickness,
	Thickness
} from '../index';
import { cssSizeData, dockPointData, elementData, thicknessData } from './testValues';

describe('method', () => {
	describe('.cssSize', () => {
		testMethod({
			...cssSizeData,
			coerce: [{
				value: '16px',
				coerced: new CssSize('16px')
			}]
		}, methodCssSize, method);

		describe('(stringify)', () => {
			testMethod({
				name: 'cssSize',
				true: ['14px', '20px'],
				false: [],
				coerceTrue: [],
				extraProps: {
					stringify: true
				}
			}, methodCssSize, method);
		});
	});

	describe('.dockPoint', () => {
		testMethod({
			...dockPointData,
			coerce: [{
				value: DockPoint.POINTS.TOP_RIGHT,
				coerced: new DockPoint(DockPoint.POINTS.TOP_RIGHT)
			}]
		}, methodDockPoint, method);

		describe('(stringify)', () => {
			testMethod({
				name: 'dockPoint',
				true: [DockPoint.POINTS.TOP_CENTER, DockPoint.POINTS.BOTTOM_LEFT],
				false: [],
				coerceTrue: [],
				extraProps: {
					stringify: true
				}
			}, methodDockPoint, method);
		});
	});

	describe('.element', () => {
		testMethod(elementData, methodElement, method);
	});

	describe('.thickness', () => {
		testMethod({
			...thicknessData,
			coerce: [{
				value: '12px 4rem',
				coerced: new Thickness('12px 64px')
			}, {
				value: 13,
				coerced: new Thickness('13px')
			}]
		}, methodThickness, method);

		describe('(stringify)', () => {
			testMethod({
				name: 'thickness',
				true: ['12px', '20px'],
				false: [],
				coerceTrue: [],
				extraProps: {
					stringify: true
				},
				coerce: [{
					value: '12px 4rem',
					coerced: '12px 64px'
				}, {
					value: 13,
					coerced: '13px'
				}]
			}, methodThickness, method);
		});
	});
});

