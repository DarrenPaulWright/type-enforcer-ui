import { benchSettings } from 'karma-webpack-bundle';
import { DockPoint } from '../index.js';

suite('DockPoint', () => {
	let sandbox;
	let dockpoint;
	let dockpoint2;

	benchmark('init default', () => {
		sandbox = new DockPoint();
	}, benchSettings);

	benchmark('init primary only', () => {
		sandbox = new DockPoint(DockPoint.BASIC_POINTS.TOP);
	}, benchSettings);

	benchmark('init both', () => {
		sandbox = new DockPoint(DockPoint.POINTS.TOP_RIGHT);
	}, benchSettings);

	benchmark('value set primary only', () => {
		sandbox = dockpoint.value(DockPoint.POINTS.TOP);
	}, {
		...benchSettings,
		onStart() {
			dockpoint = new DockPoint();
		}
	});

	benchmark('value set both', () => {
		sandbox = dockpoint.value(DockPoint.POINTS.TOP_RIGHT);
	}, {
		...benchSettings,
		onStart() {
			dockpoint = new DockPoint();
		}
	});

	benchmark('value get', () => {
		sandbox = dockpoint.value();
	}, {
		...benchSettings,
		onStart() {
			dockpoint = new DockPoint(DockPoint.POINTS.TOP_RIGHT);
		}
	});

	benchmark('isSame undefined', () => {
		sandbox = dockpoint.isSame();
	}, {
		...benchSettings,
		onStart() {
			dockpoint = new DockPoint(DockPoint.POINTS.TOP_RIGHT);
		}
	});

	benchmark('isSame dockPoint false', () => {
		sandbox = dockpoint.isSame();
	}, {
		...benchSettings,
		onStart() {
			dockpoint = new DockPoint(DockPoint.POINTS.TOP_RIGHT);
			dockpoint2 = new DockPoint(DockPoint.POINTS.TOP_CENTER);
		}
	});

	benchmark('isSame dockPoint true', () => {
		sandbox = dockpoint.isSame(dockpoint2);
	}, {
		...benchSettings,
		onStart() {
			dockpoint = new DockPoint(DockPoint.POINTS.TOP_RIGHT);
			dockpoint2 = new DockPoint(DockPoint.POINTS.TOP_RIGHT);
		}
	});

	benchmark('isSame string false', () => {
		sandbox = dockpoint.isSame();
	}, {
		...benchSettings,
		onStart() {
			dockpoint = new DockPoint(DockPoint.POINTS.TOP_RIGHT);
			dockpoint2 = DockPoint.POINTS.TOP_CENTER;
		}
	});

	benchmark('isSame string true', () => {
		sandbox = dockpoint.isSame(dockpoint2);
	}, {
		...benchSettings,
		onStart() {
			dockpoint = new DockPoint(DockPoint.POINTS.TOP_RIGHT);
			dockpoint2 = DockPoint.POINTS.TOP_RIGHT;
		}
	});

	benchmark('isValid DockPoint', () => {
		sandbox = DockPoint.isValid(dockpoint);
	}, {
		...benchSettings,
		onStart() {
			dockpoint = new DockPoint(DockPoint.POINTS.TOP_RIGHT);
		}
	});

	benchmark('isValid string true', () => {
		sandbox = DockPoint.isValid(DockPoint.POINTS.TOP_RIGHT);
	}, benchSettings);

	benchmark('isValid string false', () => {
		sandbox = DockPoint.isValid('foo');
	}, benchSettings);

	benchmark('oppositePrimary', () => {
		sandbox = dockpoint.oppositePrimary;
	}, {
		...benchSettings,
		onStart() {
			dockpoint = new DockPoint(DockPoint.POINTS.TOP_RIGHT);
		}
	});

	benchmark('oppositeSecondary', () => {
		sandbox = dockpoint.oppositeSecondary;
	}, {
		...benchSettings,
		onStart() {
			dockpoint = new DockPoint(DockPoint.POINTS.TOP_RIGHT);
		}
	});

	benchmark('opposite', () => {
		sandbox = dockpoint.opposite;
	}, {
		...benchSettings,
		onStart() {
			dockpoint = new DockPoint(DockPoint.POINTS.TOP_RIGHT);
		}
	});

	benchmark('swapHorizontal', () => {
		sandbox = dockpoint.swapHorizontal();
	}, {
		...benchSettings,
		onStart() {
			dockpoint = new DockPoint(DockPoint.POINTS.TOP_RIGHT);
		}
	});

	benchmark('swapVertical', () => {
		sandbox = dockpoint.swapVertical();
	}, {
		...benchSettings,
		onStart() {
			dockpoint = new DockPoint(DockPoint.POINTS.TOP_RIGHT);
		}
	});

});
