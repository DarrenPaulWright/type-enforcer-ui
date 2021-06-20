import { benchSettings } from 'karma-webpack-bundle';
import {
	CENTIMETERS,
	CH,
	EM,
	EX,
	INCHES,
	MILLIMETERS,
	PICAS,
	PIXELS,
	POINTS,
	VIEWPORT_HEIGHT,
	VIEWPORT_MIN,
	VIEWPORT_WIDTH
} from '../src/utility/cssUnits.js';
import measureCssUnits from '../src/utility/measureCssUnits.js';

/* eslint-disable no-unused-vars */
suite('measureCssUnits', () => {
	let sandbox = null;
	const element = document.createElement('div');
	const element2 = document.createElement('div');
	const viewPortUnits = [VIEWPORT_HEIGHT, VIEWPORT_WIDTH, VIEWPORT_MIN];
	const fontBasedUnits = [EM, EX, CH];
	const pixelBasedUnits = [PIXELS,
		INCHES,
		CENTIMETERS,
		MILLIMETERS,
		PICAS,
		POINTS];

	document.body.appendChild(element2);

	benchmark('no units', () => {
		sandbox = measureCssUnits([], {});
	}, benchSettings);

	benchmark('one unit', () => {
		sandbox = measureCssUnits(['em'], {});
	}, benchSettings);

	benchmark('viewPortUnits', () => {
		sandbox = measureCssUnits(viewPortUnits, {});
	}, benchSettings);

	benchmark('fontBasedUnits', () => {
		sandbox = measureCssUnits(fontBasedUnits, {});
	}, benchSettings);

	benchmark('pixelBasedUnits', () => {
		sandbox = measureCssUnits(pixelBasedUnits, {});
	}, benchSettings);

	benchmark('viewPortUnits element', () => {
		sandbox = measureCssUnits(viewPortUnits, {}, element);
	}, benchSettings);

	benchmark('fontBasedUnits element', () => {
		sandbox = measureCssUnits(fontBasedUnits, {}, element);
	}, benchSettings);

	benchmark('pixelBasedUnits element', () => {
		sandbox = measureCssUnits(pixelBasedUnits, {}, element);
	}, benchSettings);

	benchmark('viewPortUnits element attached', () => {
		sandbox = measureCssUnits(viewPortUnits, {}, element2);
	}, benchSettings);

	benchmark('fontBasedUnits element attached', () => {
		sandbox = measureCssUnits(fontBasedUnits, {}, element2);
	}, benchSettings);

	benchmark('pixelBasedUnits element attached', () => {
		sandbox = measureCssUnits(pixelBasedUnits, {}, element2);
	}, benchSettings);
});
