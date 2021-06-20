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


<br><a name="DockPoint"></a>

## DockPoint
> Allows the designation of a specific point relative to an object.


* [DockPoint](#DockPoint)
    * [new DockPoint([value])](#new_DockPoint_new)
    * _instance_
        * [.opposite](#DockPoint+opposite) ⇒ [<code>DockPoint</code>](#DockPoint)
        * [.oppositePrimary](#DockPoint+oppositePrimary) ⇒ <code>string</code>
        * [.oppositeSecondary](#DockPoint+oppositeSecondary) ⇒ <code>string</code>
        * [.has(value)](#DockPoint+has) ⇒ <code>boolean</code>
        * [.swapHorizontal()](#DockPoint+swapHorizontal)
        * [.swapVertical()](#DockPoint+swapVertical)
        * [.isSame(dockPoint)](#DockPoint+isSame) ⇒ <code>boolean</code>
        * [.toString()](#DockPoint+toString) ⇒ <code>string</code>
        * [.primary([value])](#DockPoint+primary) ⇒ <code>this</code> \| <code>string</code>
        * [.secondary([value])](#DockPoint+secondary) ⇒ <code>this</code> \| <code>string</code>
        * [.value([value])](#DockPoint+value) ⇒ <code>this</code> \| <code>string</code>
    * _static_
        * [.BASIC_POINTS](#DockPoint.BASIC_POINTS) : <code>Enum</code>
        * [.POINTS](#DockPoint.POINTS) : <code>Enum</code>
        * [.isValid(value)](#DockPoint.isValid) ⇒ <code>boolean</code>


<br><a name="new_DockPoint_new"></a>

### new DockPoint([value])

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [value] | <code>string</code> | <code>&quot;DockPoint.POINTS.TOP_CENTER&quot;</code> | Anything from DockPoint.POINTS |

**Example**  
``` javascript
import { DockPoint } from 'type-enforcer-ui';
```

<br><a name="DockPoint+opposite"></a>

### dockPoint.opposite ⇒ [<code>DockPoint</code>](#DockPoint)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_`🔒 Read only`_

> Get a new DockPoint with the opposite value.


<br><a name="DockPoint+oppositePrimary"></a>

### dockPoint.oppositePrimary ⇒ <code>string</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_`🔒 Read only`_

> Get the opposite of the current primary.

**Returns**: <code>string</code> - DockPoint.BASIC_POINTS.  

<br><a name="DockPoint+oppositeSecondary"></a>

### dockPoint.oppositeSecondary ⇒ <code>string</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_`🔒 Read only`_

> Get the opposite of the current secondary.

**Returns**: <code>string</code> - DockPoint.BASIC_POINTS.  

<br><a name="DockPoint+has"></a>

### dockPoint.has(value) ⇒ <code>boolean</code>
> Determine either the primary or secondary is equivalent to a value.


| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> | DockPoint.BASIC_POINTS. |


<br><a name="DockPoint+swapHorizontal"></a>

### dockPoint.swapHorizontal()
> Set the left or right value to the opposite, whether it's the primary or secondary.


<br><a name="DockPoint+swapVertical"></a>

### dockPoint.swapVertical()
> Set the top or bottom value to the opposite, whether it's the primary or secondary.


<br><a name="DockPoint+isSame"></a>

### dockPoint.isSame(dockPoint) ⇒ <code>boolean</code>
> Determine if another DockPoint is equivalent to this one.


| Param | Type | Description |
| --- | --- | --- |
| dockPoint | [<code>DockPoint</code>](#DockPoint), <code>string</code> | A value to compare to this one. |


<br><a name="DockPoint+toString"></a>

### dockPoint.toString() ⇒ <code>string</code>
> Get the current value as a string.


<br><a name="DockPoint+primary"></a>

### dockPoint.primary([value]) ⇒ <code>this</code> \| <code>string</code>
> The primary value

**Returns**: <code>this</code> \| <code>string</code> - DockPoint.BASIC_POINTS  

| Param | Type | Description |
| --- | --- | --- |
| [value] | <code>string</code> | DockPoint.BASIC_POINTS |


<br><a name="DockPoint+secondary"></a>

### dockPoint.secondary([value]) ⇒ <code>this</code> \| <code>string</code>
> The secondary value

**Returns**: <code>this</code> \| <code>string</code> - DockPoint.BASIC_POINTS  

| Param | Type | Description |
| --- | --- | --- |
| [value] | <code>string</code> | DockPoint.BASIC_POINTS |


<br><a name="DockPoint+value"></a>

### dockPoint.value([value]) ⇒ <code>this</code> \| <code>string</code>
> The full value

**Returns**: <code>this</code> \| <code>string</code> - DockPoint.POINTS  

| Param | Type | Description |
| --- | --- | --- |
| [value] | <code>string</code> | DockPoint.POINTS |


<br><a name="DockPoint.BASIC_POINTS"></a>

### DockPoint.BASIC\_POINTS : <code>Enum</code>

<br><a name="DockPoint.POINTS"></a>

### DockPoint.POINTS : <code>Enum</code>

<br><a name="DockPoint.isValid"></a>

### DockPoint.isValid(value) ⇒ <code>boolean</code>
> Determine if something is a valid dock point.


| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | S value to check. |


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
