import { benchSettings } from 'karma-webpack-bundle';
import isElementInDom from '../src/utility/isElementInDom.js';

suite('isElementInDom', () => {
	let sandbox;
	let element;

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
