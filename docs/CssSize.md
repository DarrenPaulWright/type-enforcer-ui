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


<br><a name="CssSize"></a>

## CssSize
> A class for handling css size conversions


* [CssSize](#CssSize)
    * [new CssSize([size])](#new_CssSize_new)
    * _instance_
        * [.units](#CssSize+units) ⇒ <code>string</code>
        * [.value](#CssSize+value) ⇒ <code>number</code>
        * [.isAuto](#CssSize+isAuto) ⇒ <code>boolean</code>
        * [.isFixed](#CssSize+isFixed) ⇒ <code>boolean</code>
        * [.isPercent](#CssSize+isPercent) ⇒ <code>boolean</code>
        * [.set(size)](#CssSize+set) ⇒ <code>this</code>
        * [.toPixels([getNumber])](#CssSize+toPixels) ⇒ <code>number</code> \| <code>string</code>
        * [.isSame(size)](#CssSize+isSame) ⇒ <code>boolean</code>
        * [.toString()](#CssSize+toString) ⇒ <code>string</code>
        * [.element([element])](#CssSize+element) ⇒ <code>this</code> \| <code>Element</code>
    * _static_
        * [.isValid(value)](#CssSize.isValid) ⇒ <code>boolean</code>


<br><a name="new_CssSize_new"></a>

### new CssSize([size])

| Param | Type | Default |
| --- | --- | --- |
| [size] | <code>string</code> | <code>0</code> | 

**Example**  
``` javascript
import { CssSize } from 'type-enforcer-ui';
```

<br><a name="CssSize+units"></a>

### cssSize.units ⇒ <code>string</code>
> Get the units portion of the current value.


<br><a name="CssSize+value"></a>

### cssSize.value ⇒ <code>number</code>
> Get the numeric portion of the current value.


<br><a name="CssSize+isAuto"></a>

### cssSize.isAuto ⇒ <code>boolean</code>
> Determine if the current value is 'auto'.


<br><a name="CssSize+isFixed"></a>

### cssSize.isFixed ⇒ <code>boolean</code>
> Determine if the current value is a fixed size.


<br><a name="CssSize+isPercent"></a>

### cssSize.isPercent ⇒ <code>boolean</code>
> Determine if the current value is a percent size.


<br><a name="CssSize+set"></a>

### cssSize.set(size) ⇒ <code>this</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_`🔗 Chainable`_

> Set the value.


| Param | Type | Description |
| --- | --- | --- |
| size | <code>string</code> | A valid css size, ie '32px', '1rem', 'auto', etc. |


<br><a name="CssSize+toPixels"></a>

### cssSize.toPixels([getNumber]) ⇒ <code>number</code> \| <code>string</code>
> Get the pixel equivalent of the current value.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [getNumber] | <code>boolean</code> | <code>false</code> | If true then return a number, else a string with 'px' on the end. |


<br><a name="CssSize+isSame"></a>

### cssSize.isSame(size) ⇒ <code>boolean</code>
> Determine if another size is equivalent to this one.


| Param | Type | Description |
| --- | --- | --- |
| size | [<code>CssSize</code>](#CssSize), <code>string</code> | A value to check against this css sie. |


<br><a name="CssSize+toString"></a>

### cssSize.toString() ⇒ <code>string</code>
> Get the current value as a string.


<br><a name="CssSize+element"></a>

### cssSize.element([element]) ⇒ <code>this</code> \| <code>Element</code>
> Set the element to measure font based units against.


| Param | Type | Description |
| --- | --- | --- |
| [element] | <code>Element</code> | A DOM element. |


<br><a name="CssSize.isValid"></a>

### CssSize.isValid(value) ⇒ <code>boolean</code>
> Determine if something is a valid css size.


| Param | Type | Description |
| --- | --- | --- |
| value | <code>unknown</code> | A value to check. |


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
