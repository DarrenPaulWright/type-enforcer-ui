import isElementInDom from './isElementInDom.js';

export default (units, save, element) => {
	const isAttached = Boolean(element) && isElementInDom(element);
	const thisElement = element || document.createElement('div');
	const originalHeight = element ? thisElement.style.maxHeight : 0;

	if (isAttached === false) {
		document.body.appendChild(thisElement);
	}

	const styles = (typeof window === 'undefined') ?
		{ maxHeight: '0px' } :
		window.getComputedStyle(thisElement);

	units.forEach((unit) => {
		thisElement.style.maxHeight = '1' + unit;
		save[unit] = Number(styles.maxHeight.slice(0, -2)) || 0;
	});

	if (element === undefined) {
		thisElement.remove();
	}
	else {
		thisElement.style.maxHeight = originalHeight;

		if (isAttached === false) {
			thisElement.parentNode.removeChild(thisElement);
		}
	}
};
