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

export { default as is } from './src/checks/is';
export { default as isCssSize } from './src/checks/isCssSize';
export { default as isDockPoint } from './src/checks/isDockPoint';
export { default as isElement } from './src/checks/isElement';
export { default as isThickness } from './src/checks/isThickness';

export { default as enforce } from './src/enforcer/enforce';
export { default as enforceCssSize } from './src/enforcer/enforceCssSize';
export { default as enforceDockPoint } from './src/enforcer/enforceDockPoint';
export { default as enforceElement } from './src/enforcer/enforceElement';
export { default as enforceThickness } from './src/enforcer/enforceThickness';

export { default as method } from './src/methods/method';
export { default as methodCssSize } from './src/methods/methodCssSize';
export { default as methodDockPoint } from './src/methods/methodDockPoint';
export { default as methodElement } from './src/methods/methodElement';
export { default as methodThickness } from './src/methods/methodThickness';

export * from './src/utility/cssUnits';
export { default as CssSize } from './src/CssSize';
export { default as DockPoint } from './src/DockPoint';
export { default as Thickness } from './src/Thickness';
export { default as windowResize } from './src/windowResize';
