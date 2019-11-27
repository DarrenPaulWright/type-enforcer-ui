const isElementInDom = (element) => {
	return Boolean(element) && (element === document || isElementInDom(element.parentNode));
};

export default isElementInDom;
