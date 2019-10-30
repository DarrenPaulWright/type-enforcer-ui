import { testEnforce } from 'type-enforcer-test-helper';
import {
	CssSize,
	DockPoint,
	enforce,
	enforceCssSize,
	enforceDockPoint,
	enforceElement,
	enforceThickness,
	Thickness
} from '../index';
import { cssSizeData, dockPointData, elementData, thicknessData } from './testValues';

describe('enforce', () => {
	describe('.cssSize', () => {
		testEnforce(cssSizeData, enforceCssSize, enforce, (item) => new CssSize(item));
	});

	describe('.dockPoint', () => {
		testEnforce(dockPointData, enforceDockPoint, enforce, (item) => new DockPoint(item));
	});

	describe('.element', () => {
		testEnforce(elementData, enforceElement, enforce);
	});

	describe('.thickness', () => {
		testEnforce(thicknessData, enforceThickness, enforce, (item) => new Thickness(item));
	});
});
