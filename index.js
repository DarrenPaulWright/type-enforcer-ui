/**
 * @name Installation
 * @private
 * @summary
 *
 * _Requires Babel 7.2+_
 */

/**
 * @name About
 * @private
 * @summary
 * type-enforcer-ui re-exports everything from [type-enforcer](https://github.com/DarrenPaulWright/type-enforcer) and [type-enforcer-math](https://github.com/DarrenPaulWright/type-enforcer-math).
 */
export * from 'type-enforcer-math';

export { default as is } from './src/checks/is.js';
export { default as isCssSize } from './src/checks/isCssSize.js';
export { default as isDockPoint } from './src/checks/isDockPoint.js';
export { default as isElement } from './src/checks/isElement.js';
export { default as isThickness } from './src/checks/isThickness.js';

export { default as enforce } from './src/enforcer/enforce.js';
export { default as enforceCssSize } from './src/enforcer/enforceCssSize.js';
export { default as enforceDockPoint } from './src/enforcer/enforceDockPoint.js';
export { default as enforceElement } from './src/enforcer/enforceElement.js';
export { default as enforceThickness } from './src/enforcer/enforceThickness.js';

export { default as method } from './src/methods/method.js';
export { default as methodCssSize } from './src/methods/methodCssSize.js';
export { default as methodDockPoint } from './src/methods/methodDockPoint.js';
export { default as methodElement } from './src/methods/methodElement.js';
export { default as methodThickness } from './src/methods/methodThickness.js';

export * from './src/utility/cssUnits';
export { default as CssSize } from './src/CssSize.js';
export { default as DockPoint } from './src/DockPoint.js';
export { default as Thickness } from './src/Thickness.js';
export { default as windowResize } from './src/windowResize.js';
