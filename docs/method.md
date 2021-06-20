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


<br><a name="method"></a>

## method : <code>object</code>
> Enforce data types and remove common boilerplate code on class methods. Includes all the methods from [type-enforcer](https://github.com/DarrenPaulWright/type-enforcer) and [type-enforcer-math](https://github.com/DarrenPaulWright/type-enforcer-math).

**Example**  
``` javascript
import { method } from 'type-enforcer-ui';

// Or import individual functions
import { methodBoolean, methodString } from 'type-enforcer-ui';

// Use it as a prototype:
const Thing = function() {};

Thing.prototype.myMethod = method.string([options]);


// or in a class:
class Thing() {}

Thing.prototype.myMethod = method.string([options]);


// or as a non-prototype method:
const Thing = function() {
    this.myMethod = method.string([options]);
};
```

* [method](#method) : <code>object</code>
    * [.cssSize([options])](#method.cssSize) ⇒ <code>function</code>
    * [.dockPoint([options])](#method.dockPoint) ⇒ <code>function</code>
    * [.element([options])](#method.element) ⇒ <code>function</code>
    * [.thickness([options])](#method.thickness) ⇒ <code>function</code>


<br><a name="method.cssSize"></a>

### method.cssSize([options]) ⇒ <code>function</code>
> Builds a chainable method for getting/setting a [CssSize](docs/CssSize.md)

**Alias:** `methodCssSize`

**Extends**: <code>method.any</code>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [options] | <code>object</code> |  | Same as [method.any](method.any) with the following differences: |
| [options.enforce] | <code>function</code> | <code>enforce.cssSize</code> |  |
| [options.compare] | <code>function</code> | <code>CssSize.isSame</code> |  |
| [options.coerce] | <code>boolean</code> | <code>true</code> | If false then don't coerce the value |


<br><a name="method.dockPoint"></a>

### method.dockPoint([options]) ⇒ <code>function</code>
> Builds a chainable method for getting/setting a [DockPoint](docs/DockPoint.md)

**Alias:** `methodDockPoint`

**Extends**: <code>method.any</code>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [options] | <code>object</code> |  | Same as [method.any](method.any) with the following differences: |
| [options.enforce] | <code>function</code> | <code>enforce.dockPoint</code> |  |
| [options.compare] | <code>function</code> | <code>DockPoint.isSame</code> |  |
| [options.coerce] | <code>boolean</code> | <code>true</code> | If false then don't coerce the value |


<br><a name="method.element"></a>

### method.element([options]) ⇒ <code>function</code>
> Builds a chainable method for getting/setting a DOM element

**Alias:** `methodElement`

**Extends**: <code>method.any</code>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [options] | <code>object</code> |  | Same as [method.any](method.any) with the following differences: |
| [options.enforce] | <code>function</code> | <code>enforce.element</code> |  |


<br><a name="method.thickness"></a>

### method.thickness([options]) ⇒ <code>function</code>
> Builds a chainable method for getting/setting a [Thickness](docs/Thickness.md)

**Alias:** `methodThickness`

**Extends**: <code>method.any</code>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [options] | <code>object</code> |  | Same as [method.any](method.any) with the following differences: |
| [options.enforce] | <code>function</code> | <code>enforce.thickness</code> |  |
| [options.compare] | <code>function</code> | <code>Thickness.isSame</code> |  |
| [options.coerce] | <code>boolean</code> | <code>true</code> | If false then don't coerce the value |


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
