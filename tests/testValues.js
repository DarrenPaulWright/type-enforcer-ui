import { testTypes, testValues, validArrays, validFloats, validIntegers } from 'type-enforcer-test-helper';
import {
	AUTO,
	CENTIMETERS,
	CH,
	CssSize,
	DockPoint,
	EM,
	EX,
	INCHES,
	INHERIT,
	INITIAL,
	MILLIMETERS,
	NONE,
	PERCENT,
	PICAS,
	PIXELS,
	POINTS,
	ROOT_EM,
	Thickness,
	VIEWPORT_HEIGHT,
	VIEWPORT_MIN,
	VIEWPORT_WIDTH,
	ZERO_PIXELS
} from '../index.js';

const difference = (array1, ...args) => {
	let diffArrays = [].concat(...args);
	return array1.filter((item) => !diffArrays.includes(item));
};

export const validCssSizes = [new CssSize('14px'), new CssSize('20px')];
export const validDockPoints = [new DockPoint(DockPoint.POINTS.TOP_CENTER),
	new DockPoint(DockPoint.POINTS.BOTTOM_LEFT)];
export const validElements = [document.createElement('div'), document.createElement('span')];
export const validThicknesses = [new Thickness('12px'), new Thickness('20px')];

export const unitlessCssSizes = [AUTO, INITIAL, INHERIT, NONE].map((size) => ({
	size: size,
	value: undefined,
	unit: undefined
}));
const otherValidSizes = [{
	size: ZERO_PIXELS,
	value: 0,
	unit: ''
}, {
	size: 0,
	value: 0,
	unit: ''
}, {
	size: 123.4,
	value: 123.4,
	unit: PIXELS
}, {
	size: -32.9,
	value: -32.9,
	unit: PIXELS
}];
const validSizes = unitlessCssSizes.concat(otherValidSizes);
export const fixedCssUnits = ['',
	PIXELS,
	CENTIMETERS,
	EM,
	ROOT_EM,
	EX,
	CH,
	INCHES,
	MILLIMETERS,
	PICAS,
	POINTS,
	VIEWPORT_HEIGHT,
	VIEWPORT_WIDTH,
	VIEWPORT_MIN];
export const percentCssUnits = [PERCENT];
const cssUnits = percentCssUnits.concat(fixedCssUnits);

const positiveUnits = cssUnits.map((unit) => ({
	size: '47.3' + unit,
	value: 47.3,
	unit: unit || PIXELS
}));
const negativeUnits = cssUnits.map((unit) => ({
	size: '-327.2' + unit,
	value: -327.2,
	unit: unit || PIXELS
}));
const notationUnits = cssUnits.map((unit) => ({
	size: '1E2' + unit,
	value: 100,
	unit: unit || PIXELS
}));

export const validCssValuesShortList = positiveUnits.concat(validSizes);
export const validCssValues = validCssValuesShortList.concat(negativeUnits, notationUnits);

const coercibleDockPoints = [];
DockPoint.POINTS.each((value) => {
	coercibleDockPoints.push(value);
});

validElements.concat(
	validCssSizes,
	validDockPoints,
	validThicknesses
	)
	.forEach((value) => {
		testValues.push(value);
	});

export const cssSizeData = {
	value: CssSize,
	name: 'cssSize',
	true: validCssSizes,
	false: difference(testValues, validCssSizes),
	coerceTrue: validCssValues.map((item) => item.size).concat(['inherit', 'initial']),
	coerceFalse: difference(testValues, validCssSizes, validIntegers, validFloats)
};
export const dockPointData = {
	value: DockPoint,
	name: 'dockPoint',
	true: validDockPoints,
	false: difference(testValues, validDockPoints, ['']),
	coerceTrue: coercibleDockPoints,
	coerceFalse: difference(testValues, validDockPoints, [''])
};
export const elementData = {
	value: Element,
	name: 'element',
	true: validElements,
	false: difference(testValues, validElements),
	coerceTrue: [],
	coerceFalse: []
};
export const thicknessData = {
	value: Thickness,
	name: 'thickness',
	true: validThicknesses,
	false: difference(testValues, validThicknesses),
	coerceTrue: ['1px', '1px 2px 3px 4px', 'inherit', 'initial'],
	coerceFalse: difference(testValues, validThicknesses, validCssSizes, validIntegers, validFloats, validArrays)
};

export const localTestTypes = [cssSizeData, dockPointData, elementData, thicknessData];

localTestTypes.forEach((type) => testTypes.push(type));
