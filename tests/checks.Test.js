import { testCheck } from 'type-enforcer-test-helper';
import { is, isCssSize, isDockPoint, isElement, isThickness } from '../index';
import { cssSizeData, dockPointData, elementData, thicknessData } from './testValues';

describe('checks', () => {
	describe('isCssSize', () => {
		testCheck(cssSizeData, isCssSize, is);
	});

	describe('isDockpoint', () => {
		testCheck(dockPointData, isDockPoint, is);
	});

	describe('isElement', () => {
		testCheck(elementData, isElement, is);
	});

	describe('isThickness', () => {
		testCheck(thicknessData, isThickness, is);
	});
});
