import { benchSettings } from 'karma-webpack-bundle';
import { Thickness } from '../index.js';

/* eslint-disable no-unused-vars */
suite('Thickness', () => {
	let sandbox = null;
	let thickness = {};
	let thickness2 = {};

	benchmark('init default', () => {
		sandbox = new Thickness();
	}, benchSettings);

	benchmark('init single number', () => {
		sandbox = new Thickness(32);
	}, benchSettings);

	benchmark('init two numbers', () => {
		sandbox = new Thickness(32, 16);
	}, benchSettings);

	benchmark('init three numbers', () => {
		sandbox = new Thickness(32, 16, 8);
	}, benchSettings);

	benchmark('init four numbers', () => {
		sandbox = new Thickness(32, 16, 8, 4);
	}, benchSettings);

	benchmark('init string', () => {
		sandbox = new Thickness('32, 16, 8, 4');
	}, benchSettings);

	benchmark('init thickness', () => {
		sandbox = new Thickness(thickness);
	}, {
		...benchSettings,
		onCycle() {
			thickness = new Thickness(32, 16);
		}
	});

	benchmark('toString one', () => {
		sandbox = thickness.toString();
	}, {
		...benchSettings,
		onCycle() {
			thickness = new Thickness(32);
		}
	});

	benchmark('toString two', () => {
		sandbox = thickness.toString();
	}, {
		...benchSettings,
		onCycle() {
			thickness = new Thickness(32, 16);
		}
	});

	benchmark('toString three', () => {
		sandbox = thickness.toString();
	}, {
		...benchSettings,
		onCycle() {
			thickness = new Thickness(32, 16, 8);
		}
	});

	benchmark('toString four', () => {
		sandbox = thickness.toString();
	}, {
		...benchSettings,
		onCycle() {
			thickness = new Thickness(32, 16, 8, 4);
		}
	});

	benchmark('isSame thickness true', () => {
		sandbox = thickness.isSame(thickness2);
	}, {
		...benchSettings,
		onCycle() {
			thickness = new Thickness(32, 16, 8, 4);
			thickness2 = new Thickness(32, 16, 8, 4);
		}
	});

	benchmark('isSame thickness false', () => {
		sandbox = thickness.isSame(thickness2);
	}, {
		...benchSettings,
		onCycle() {
			thickness = new Thickness(32, 16, 8, 4);
			thickness2 = new Thickness(32, 16, 8, 5);
		}
	});

	benchmark('isSame string true', () => {
		sandbox = thickness.isSame('32 16 8 4');
	}, {
		...benchSettings,
		onCycle() {
			thickness = new Thickness(32, 16, 8, 4);
		}
	});

	benchmark('isSame string false', () => {
		sandbox = thickness.isSame('32 16 8 5');
	}, {
		...benchSettings,
		onCycle() {
			thickness = new Thickness(32, 16, 8, 4);
		}
	});

	benchmark('isSame number true', () => {
		sandbox = thickness.isSame(32);
	}, {
		...benchSettings,
		onCycle() {
			thickness = new Thickness(32);
		}
	});

	benchmark('isSame number false', () => {
		sandbox = thickness.isSame(33);
	}, {
		...benchSettings,
		onCycle() {
			thickness = new Thickness(32);
		}
	});

	benchmark('isValid thickness', () => {
		sandbox = Thickness.isValid(thickness);
	}, {
		...benchSettings,
		onCycle() {
			thickness = new Thickness(32, 16, 8, 4);
		}
	});

	benchmark('isValid undefined', () => {
		sandbox = Thickness.isValid();
	}, benchSettings);

	benchmark('isValid string true', () => {
		sandbox = Thickness.isValid('32 16 8 4');
	}, benchSettings);

	benchmark('isValid string false', () => {
		sandbox = Thickness.isValid('32 16 8 asdf');
	}, benchSettings);

	benchmark('isValid number true', () => {
		sandbox = Thickness.isValid(32);
	}, benchSettings);

	benchmark('isValid number false', () => {
		sandbox = Thickness.isValid(1, 2, 3, 4, 5);
	}, benchSettings);

	benchmark('vertical', () => {
		sandbox = thickness.vertical;
	}, {
		...benchSettings,
		onCycle() {
			thickness = new Thickness(32, 16, 8, 4);
		}
	});

	benchmark('horizontal', () => {
		sandbox = thickness.horizontal;
	}, {
		...benchSettings,
		onCycle() {
			thickness = new Thickness(32, 16, 8, 4);
		}
	});
});
