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


<br><a name="Thickness"></a>

## Thickness
> Replicates the functionality of css border-width, margin, and padding, or anything that requires top, right, bottom, and left css sizes.


* [Thickness](#Thickness)
    * [new Thickness([top], [right], [bottom], [left])](#new_Thickness_new)
    * _instance_
        * [.top](#Thickness+top) : <code>CssSize</code>
        * [.right](#Thickness+right) : <code>CssSize</code>
        * [.bottom](#Thickness+bottom) : <code>CssSize</code>
        * [.left](#Thickness+left) : <code>CssSize</code>
        * [.horizontal](#Thickness+horizontal) : <code>number</code>
        * [.vertical](#Thickness+vertical) : <code>number</code>
        * [.set([...args])](#Thickness+set)
        * [.isSame(thickness)](#Thickness+isSame) ⇒ <code>boolean</code>
        * [.toString()](#Thickness+toString) ⇒ <code>string</code>
        * [.element([element])](#Thickness+element) ⇒ <code>this</code> \| <code>Element</code>
    * _static_
        * [.isValid([...args])](#Thickness.isValid) ⇒ <code>boolean</code>


<br><a name="new_Thickness_new"></a>

### new Thickness([top], [right], [bottom], [left])

| Param | Type | Description |
| --- | --- | --- |
| [top] | <code>string</code>, <code>number</code>, <code>Array</code> | If only one size is provided it gets applied to all sides. See examples for different arrangements of args. |
| [right] | <code>string</code>, <code>number</code> | If two sizes are provided the first gets applied to top and bottom, the second size gets applied right and left |
| [bottom] | <code>string</code>, <code>number</code> | If three sizes are provided the first gets applied to top, the second to right and left, and the third to bottom |
| [left] | <code>string</code>, <code>number</code> | If four sizes are provided then they get applied to top, right, bottom, and left respectively |

**Example**  
``` javascript
import { Thickness } from 'type-enforcer-ui';

const thickness1 = new Thickness();
console.log(thickness1.toString());
// => '0'

const thickness2 = new Thickness(1, 2, 3, 4);
console.log(thickness2.toString());
// => '1px 2px 3px 4px'

const thickness3 = new Thickness([5, 6, 7]);
console.log(thickness3.toString());
// => '5px 6px 7px'

const thickness4 = new Thickness('20px 30px');
console.log(thickness4.toString());
// => '20px 30px'

const thickness5 = new Thickness('20px');
thickness5.bottom = 5;
console.log(thickness5.toString());
// => '20px 20px 5px'
```

<br><a name="Thickness+top"></a>

### thickness.top : <code>CssSize</code>
> The top size.


<br><a name="Thickness+right"></a>

### thickness.right : <code>CssSize</code>
> The right size.


<br><a name="Thickness+bottom"></a>

### thickness.bottom : <code>CssSize</code>
> The bottom size.


<br><a name="Thickness+left"></a>

### thickness.left : <code>CssSize</code>
> The left size.


<br><a name="Thickness+horizontal"></a>

### thickness.horizontal : <code>number</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_`🔒 Read only`_

> Get the sum of the right and left.


<br><a name="Thickness+vertical"></a>

### thickness.vertical : <code>number</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_`🔒 Read only`_

> Get the sum of the top and bottom.


<br><a name="Thickness+set"></a>

### thickness.set([...args])
> Set the sizes of all sides.


| Param | Type | Description |
| --- | --- | --- |
| [...args] | <code>string</code>, <code>number</code>, <code>Array</code>, [<code>Thickness</code>](#Thickness) | Can be multiple numbers as pixels (1, 2,3 , 4) or multiple strings ('1px', '2rem') or an array of similar numbers or strings or another thickness. |


<br><a name="Thickness+isSame"></a>

### thickness.isSame(thickness) ⇒ <code>boolean</code>
> Determine if another thickness is the same as this one.


| Param | Type | Description |
| --- | --- | --- |
| thickness | [<code>Thickness</code>](#Thickness), <code>string</code> | A value to compare to this one. |


<br><a name="Thickness+toString"></a>

### thickness.toString() ⇒ <code>string</code>
> Get this thickness as a space separated string.


<br><a name="Thickness+element"></a>

### thickness.element([element]) ⇒ <code>this</code> \| <code>Element</code>
> Set the element to measure font based units against.


| Param | Type | Description |
| --- | --- | --- |
| [element] | <code>Element</code> | A DOM element. |


<br><a name="Thickness.isValid"></a>

### Thickness.isValid([...args]) ⇒ <code>boolean</code>
> Determine if something is a valid Thickness.


| Param | Type | Description |
| --- | --- | --- |
| [...args] | <code>string</code>, <code>number</code>, <code>Array</code>, [<code>Thickness</code>](#Thickness) | Can be multiple numbers as pixels (1, 2,3 , 4) or multiple strings ('1px', '2rem') or an array of similar numbers or strings or another thickness. |


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
