# Type Enforcer Ui

> An extension of type-enforcer with UI related data types and enforcer functions
>
> [![npm][npm]][npm-url]
[![build][build]][build-url]
[![coverage][coverage]][coverage-url]
[![deps][deps]][deps-url]
[![size][size]][size-url]
[![vulnerabilities][vulnerabilities]][vulnerabilities-url]
[![license][license]][license-url]

<br><a name="Installation"></a>

## Installation
```
npm install type-enforcer-ui
```
_Requires Babel 7.2+_

<br><a name="About"></a>

## About
type-enforcer-ui re-exports everything from [type-enforcer](https://github.com/DarrenPaulWright/type-enforcer) and [type-enforcer-math](https://github.com/DarrenPaulWright/type-enforcer-math).


<br>

## Objects

<dl>
<dt><a href="docs/is.md">is</a> : <code>object</code></dt>
<dd><p>Utility functions for checking if something is a particular data type. Includes all the checks from <a href="https://github.com/DarrenPaulWright/type-enforcer">type-enforcer</a> and <a href="https://github.com/DarrenPaulWright/type-enforcer-math">type-enforcer-math</a>.</p>
</dd>
<dt><a href="docs/enforce.md">enforce</a> : <code>object</code></dt>
<dd><p>Utility functions for enforcing data types. Includes all the enforcers from <a href="https://github.com/DarrenPaulWright/type-enforcer">type-enforcer</a> and <a href="https://github.com/DarrenPaulWright/type-enforcer-math">type-enforcer-math</a>.</p>
</dd>
<dt><a href="docs/method.md">method</a> : <code>object</code></dt>
<dd><p>Enforce data types and remove common boilerplate code on class methods. Includes all the methods from <a href="https://github.com/DarrenPaulWright/type-enforcer">type-enforcer</a> and <a href="https://github.com/DarrenPaulWright/type-enforcer-math">type-enforcer-math</a>.</p>
</dd>
</dl>

<br>

## Classes

<dl>
<dt><a href="docs/CssSize.md">CssSize</a></dt>
<dd><p>A class for handling css size conversions</p>
</dd>
<dt><a href="docs/DockPoint.md">DockPoint</a></dt>
<dd><p>Allows the designation of a specific point relative to an object.</p>
</dd>
<dt><a href="docs/Thickness.md">Thickness</a></dt>
<dd><p>Replicates the functionality of css border-width, margin, and padding, or anything that requires top, right, bottom, and left css sizes.</p>
</dd>
<dt><a href="docs/windowResize.md">windowResize</a> ⇐ <code>[Queue](https://github.com/DarrenPaulWright/type-enforcer/blob/master/docs/Queue.md)</code></dt>
<dd><p>Executes callbacks whenever the screen is resized (throttled at 100ms) or explicitly triggered</p>
</dd>
</dl>

[npm]: https://img.shields.io/npm/v/type-enforcer-ui.svg
[npm-url]: https://npmjs.com/package/type-enforcer-ui
[build]: https://travis-ci.org/DarrenPaulWright/type-enforcer-ui.svg?branch&#x3D;master
[build-url]: https://travis-ci.org/DarrenPaulWright/type-enforcer-ui
[coverage]: https://coveralls.io/repos/github/DarrenPaulWright/type-enforcer-ui/badge.svg?branch&#x3D;master
[coverage-url]: https://coveralls.io/github/DarrenPaulWright/type-enforcer-ui?branch&#x3D;master
[deps]: https://david-dm.org/DarrenPaulWright/type-enforcer-ui.svg
[deps-url]: https://david-dm.org/DarrenPaulWright/type-enforcer-ui
[size]: https://packagephobia.now.sh/badge?p&#x3D;type-enforcer-ui
[size-url]: https://packagephobia.now.sh/result?p&#x3D;type-enforcer-ui
[vulnerabilities]: https://snyk.io/test/github/DarrenPaulWright/type-enforcer-ui/badge.svg?targetFile&#x3D;package.json
[vulnerabilities-url]: https://snyk.io/test/github/DarrenPaulWright/type-enforcer-ui?targetFile&#x3D;package.json
[license]: https://img.shields.io/github/license/DarrenPaulWright/type-enforcer-ui.svg
[license-url]: https://npmjs.com/package/type-enforcer-ui/LICENSE.md
