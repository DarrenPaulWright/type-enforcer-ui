import { benchSettings } from 'karma-webpack-bundle';
import { CssSize } from '../index';

suite('CssSize', () => {
	let sandbox;
	let cssSize;
	let cssSize2;

	benchmark('init default', () => {
		sandbox = new CssSize();
	}, benchSettings);

	benchmark('init CssSize', () => {
		sandbox = new CssSize(cssSize);
	}, {
		...benchSettings,
		onStart() {
			cssSize = new CssSize('32px');
		}
	});

	benchmark('init string', () => {
		sandbox = new CssSize('32px');
	}, benchSettings);

	benchmark('init number', () => {
		sandbox = new CssSize(32);
	}, benchSettings);

	benchmark('isValid undefined', () => {
		sandbox = CssSize.isValid();
	}, benchSettings);

	benchmark('isValid CssSize', () => {
		sandbox = CssSize.isValid(cssSize);
	}, {
		...benchSettings,
		onStart() {
			cssSize = new CssSize('32px');
		}
	});

	benchmark('isValid string true', () => {
		sandbox = CssSize.isValid('32px');
	}, benchSettings);

	benchmark('isValid string false', () => {
		sandbox = CssSize.isValid('32z');
	}, benchSettings);

	benchmark('isValid number true', () => {
		sandbox = CssSize.isValid(32);
	}, benchSettings);

	benchmark('isValid number 0', () => {
		sandbox = CssSize.isValid(0);
	}, benchSettings);

	benchmark('units 0', () => {
		sandbox = cssSize.units;
	}, {
		...benchSettings,
		onCycle() {
			cssSize = new CssSize(0);
		}
	});

	benchmark('units unitless size', () => {
		sandbox = cssSize.units;
	}, {
		...benchSettings,
		onCycle() {
			cssSize = new CssSize('initial');
		}
	});

	benchmark('units non-pixel', () => {
		sandbox = cssSize.units;
	}, {
		...benchSettings,
		onCycle() {
			cssSize = new CssSize('3em');
		}
	});

	benchmark('value 0', () => {
		sandbox = cssSize.value;
	}, {
		...benchSettings,
		onCycle() {
			cssSize = new CssSize(0);
		}
	});

	benchmark('value unitless size', () => {
		sandbox = cssSize.value;
	}, {
		...benchSettings,
		onCycle() {
			cssSize = new CssSize('initial');
		}
	});

	benchmark('value non-pixel', () => {
		sandbox = cssSize.value;
	}, {
		...benchSettings,
		onCycle() {
			cssSize = new CssSize('3em');
		}
	});

	benchmark('toPixels unitless size', () => {
		sandbox = cssSize.toPixels();
	}, {
		...benchSettings,
		onCycle() {
			cssSize = new CssSize('auto');
		}
	});

	benchmark('toPixels percent', () => {
		sandbox = cssSize.toPixels();
	}, {
		...benchSettings,
		onCycle() {
			cssSize = new CssSize('50%');
		}
	});

	benchmark('toPixels rem', () => {
		sandbox = cssSize.toPixels();
	}, {
		...benchSettings,
		onCycle() {
			cssSize = new CssSize('10rem');
		}
	});

	benchmark('toPixels pixel based units', () => {
		sandbox = cssSize.toPixels();
	}, {
		...benchSettings,
		onCycle() {
			cssSize = new CssSize('3in');
		}
	});

	benchmark('toPixels viewport units', () => {
		sandbox = cssSize.toPixels();
	}, {
		...benchSettings,
		onCycle() {
			cssSize = new CssSize('3vh');
		}
	});

	benchmark('toPixels font based units', () => {
		sandbox = cssSize.toPixels();
	}, {
		...benchSettings,
		onCycle() {
			cssSize = new CssSize('3em');
		}
	});

	benchmark('toPixels 0', () => {
		sandbox = cssSize.toPixels();
	}, {
		...benchSettings,
		onCycle() {
			cssSize = new CssSize(0);
		}
	});

	benchmark('toPixels unitless size (element)', () => {
		sandbox = cssSize.toPixels();
	}, {
		...benchSettings,
		onCycle() {
			cssSize = new CssSize('auto').element(document.createElement('div'));
		}
	});

	benchmark('toPixels percent (element)', () => {
		sandbox = cssSize.toPixels();
	}, {
		...benchSettings,
		onCycle() {
			cssSize = new CssSize('50%').element(document.createElement('div'));
		}
	});

	benchmark('toPixels rem (element)', () => {
		sandbox = cssSize.toPixels();
	}, {
		...benchSettings,
		onCycle() {
			cssSize = new CssSize('10rem').element(document.createElement('div'));
		}
	});

	benchmark('toPixels pixel based units (element)', () => {
		sandbox = cssSize.toPixels();
	}, {
		...benchSettings,
		onCycle() {
			cssSize = new CssSize('3in').element(document.createElement('div'));
		}
	});

	benchmark('toPixels viewport units (element)', () => {
		sandbox = cssSize.toPixels();
	}, {
		...benchSettings,
		onCycle() {
			cssSize = new CssSize('3vh').element(document.createElement('div'));
		}
	});

	benchmark('toPixels font based units (element)', () => {
		sandbox = cssSize.toPixels();
	}, {
		...benchSettings,
		onCycle() {
			cssSize = new CssSize('3em').element(document.createElement('div'));
		}
	});

	benchmark('toPixels 0 (element)', () => {
		sandbox = cssSize.toPixels();
	}, {
		...benchSettings,
		onCycle() {
			cssSize = new CssSize(0).element(document.createElement('div'));
		}
	});

	benchmark('isAuto true', () => {
		sandbox = cssSize.isAuto;
	}, {
		...benchSettings,
		onCycle() {
			cssSize = new CssSize('auto');
		}
	});

	benchmark('isAuto false', () => {
		sandbox = cssSize.isAuto;
	}, {
		...benchSettings,
		onCycle() {
			cssSize = new CssSize('50%');
		}
	});

	benchmark('isFixed true', () => {
		sandbox = cssSize.isAuto;
	}, {
		...benchSettings,
		onCycle() {
			cssSize = new CssSize('3em');
		}
	});

	benchmark('isFixed false', () => {
		sandbox = cssSize.isAuto;
	}, {
		...benchSettings,
		onCycle() {
			cssSize = new CssSize('50%');
		}
	});

	benchmark('isPercent true', () => {
		sandbox = cssSize.isAuto;
	}, {
		...benchSettings,
		onCycle() {
			cssSize = new CssSize('50%');
		}
	});

	benchmark('isPercent false', () => {
		sandbox = cssSize.isAuto;
	}, {
		...benchSettings,
		onCycle() {
			cssSize = new CssSize('3em');
		}
	});

	benchmark('isSame CssSize true', () => {
		sandbox = cssSize.isSame(cssSize2);
	}, {
		...benchSettings,
		onCycle() {
			cssSize = new CssSize('3em');
			cssSize2 = new CssSize('3em');
		}
	});

	benchmark('isSame CssSize false', () => {
		sandbox = cssSize.isSame(cssSize2);
	}, {
		...benchSettings,
		onCycle() {
			cssSize = new CssSize('3em');
			cssSize2 = new CssSize('4em');
		}
	});

	benchmark('isSame number true', () => {
		sandbox = cssSize.isSame(3);
	}, {
		...benchSettings,
		onCycle() {
			cssSize = new CssSize('3');
		}
	});

	benchmark('isSame number false', () => {
		sandbox = cssSize.isSame(4);
	}, {
		...benchSettings,
		onCycle() {
			cssSize = new CssSize('3');
		}
	});

	benchmark('isSame string true', () => {
		sandbox = cssSize.isSame('3em');
	}, {
		...benchSettings,
		onCycle() {
			cssSize = new CssSize('3em');
		}
	});

	benchmark('isSame string false', () => {
		sandbox = cssSize.isSame('4em');
	}, {
		...benchSettings,
		onCycle() {
			cssSize = new CssSize('3em');
		}
	});

});
