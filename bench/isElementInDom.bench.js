import { benchSettings } from 'karma-webpack-bundle';
import isElementInDom from '../src/utility/isElementInDom.js';

/* eslint-disable no-unused-vars */
suite('isElementInDom', () => {
	let sandbox = null;
	let element = {};

	benchmark('undefined', () => {
		sandbox = isElementInDom();
	}, benchSettings);

	benchmark('false', () => {
		sandbox = isElementInDom(element);
	}, {
		...benchSettings,
		onStart() {
			element = document.createElement('div');
		}
	});

	benchmark('true', () => {
		sandbox = isElementInDom(element);
	}, {
		...benchSettings,
		onStart() {
			element = document.createElement('div');
			document.body.appendChild(element);
		}
	});
});
