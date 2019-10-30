# Type Enforcer Ui Addon

> An addon for type-enforcer with UI related data types and enforcer functions
>
> [![npm][npm]][npm-url]
[![build][build]][build-url]
[![coverage][coverage]][coverage-url]
[![deps][deps]][deps-url]
[![size][size]][size-url]
[![vulnerabilities][vulnerabilities]][vulnerabilities-url]
[![license][license]][license-url]


<br><a name="Thickness"></a>

### Thickness

* [Thickness](#Thickness)
    * [new Thickness([top], [right], [bottom], [left])](#new_Thickness_new)
    * _instance_
        * [.top](#Thickness+top) : <code>CssSize</code>
        * [.right](#Thickness+right) : <code>CssSize</code>
        * [.bottom](#Thickness+bottom) : <code>CssSize</code>
        * [.left](#Thickness+left) : <code>CssSize</code>
        * [.horizontal](#Thickness+horizontal) : <code>Number</code>
        * [.vertical](#Thickness+vertical) : <code>Number</code>
        * [.set([top], [right], [bottom], [left])](#Thickness+set) ⇒ <code>boolean</code>
        * [.isSame(thickness)](#Thickness+isSame) ⇒ <code>Boolean</code>
        * [.toString()](#Thickness+toString) ⇒ <code>String</code>
        * [.element([element])](#Thickness+element) ⇒ <code>this</code> \| <code>Element</code>
    * _static_
        * [.isValid(value)](#Thickness.isValid) ⇒ <code>boolean</code>


<br><a name="new_Thickness_new"></a>

#### new Thickness([top], [right], [bottom], [left])
> Replicates the functionality of css border-width, margin, and padding, or anything that requires top, right, bottom, and left css sizes.


| Param | Type | Description |
| --- | --- | --- |
| [top] | <code>String</code>, <code>Number</code>, <code>Array</code> | If only one size is provided it gets applied to all sides. See examples for different arrangements of args. |
| [right] | <code>String</code>, <code>Number</code> | If two sizes are provided the first gets applied to top and bottom, the second size gets applied right and left |
| [bottom] | <code>String</code>, <code>Number</code> | If three sizes are provided the first gets applied to top, the second to right and left, and the third to bottom |
| [left] | <code>String</code>, <code>Number</code> | If four sizes are provided then they get applied to top, right, bottom, and left respectively |

**Example**  
``` javascript

<br><a name="Thickness+top"></a>

#### thickness.top : <code>CssSize</code>
> The top size


<br><a name="Thickness+right"></a>

#### thickness.right : <code>CssSize</code>
> The right size


<br><a name="Thickness+bottom"></a>

#### thickness.bottom : <code>CssSize</code>
> The bottom size


<br><a name="Thickness+left"></a>

#### thickness.left : <code>CssSize</code>
> The left size


<br><a name="Thickness+horizontal"></a>

#### thickness.horizontal : <code>Number</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_`🔒 Read only`_

> Get the sum of the right and left


<br><a name="Thickness+vertical"></a>

#### thickness.vertical : <code>Number</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_`🔒 Read only`_

> Get the sum of the top and bottom


<br><a name="Thickness+set"></a>

#### thickness.set([top], [right], [bottom], [left]) ⇒ <code>boolean</code>
> Set the sizes of all sides


| Param | Type |
| --- | --- |
| [top] | <code>String</code>, <code>Number</code>, <code>Array</code> | 
| [right] | <code>String</code>, <code>Number</code> | 
| [bottom] | <code>String</code>, <code>Number</code> | 
| [left] | <code>String</code>, <code>Number</code> | 


<br><a name="Thickness+isSame"></a>

#### thickness.isSame(thickness) ⇒ <code>Boolean</code>
> Determine if another thickness is the same as this one


| Param | Type |
| --- | --- |
| thickness | [<code>Thickness</code>](#Thickness) | 


<br><a name="Thickness+toString"></a>

#### thickness.toString() ⇒ <code>String</code>
> Get this thickness as a space separated string


<br><a name="Thickness+element"></a>

#### thickness.element([element]) ⇒ <code>this</code> \| <code>Element</code>
> Set the element to measure font based units against


| Param | Type | Description |
| --- | --- | --- |
| [element] | <code>Element</code> | A DOM element |


<br><a name="Thickness.isValid"></a>

#### Thickness.isValid(value) ⇒ <code>boolean</code>
> Determine if something is a valid Thickness


| Param | Type |
| --- | --- |
| value | <code>\*</code> | 


[npm]: https://img.shields.io/npm/v/type-enforcer-ui-addon.svg
[npm-url]: https://npmjs.com/package/type-enforcer-ui-addon
[build]: https://travis-ci.org/DarrenPaulWright/type-enforcer-ui-addon.svg?branch&#x3D;master
[build-url]: https://travis-ci.org/DarrenPaulWright/type-enforcer-ui-addon
[coverage]: https://coveralls.io/repos/github/DarrenPaulWright/type-enforcer-ui-addon/badge.svg?branch&#x3D;master
[coverage-url]: https://coveralls.io/github/DarrenPaulWright/type-enforcer-ui-addon?branch&#x3D;master
[deps]: https://david-dm.org/darrenpaulwright/type-enforcer-ui-addon.svg
[deps-url]: https://david-dm.org/darrenpaulwright/type-enforcer-ui-addon
[size]: https://packagephobia.now.sh/badge?p&#x3D;type-enforcer-ui-addon
[size-url]: https://packagephobia.now.sh/result?p&#x3D;type-enforcer-ui-addon
[vulnerabilities]: https://snyk.io/test/github/DarrenPaulWright/type-enforcer-ui-addon/badge.svg?targetFile&#x3D;package.json
[vulnerabilities-url]: https://snyk.io/test/github/DarrenPaulWright/type-enforcer-ui-addon?targetFile&#x3D;package.json
[license]: https://img.shields.io/github/license/DarrenPaulWright/type-enforcer-ui-addon.svg
[license-url]: https://npmjs.com/package/type-enforcer-ui-addon/LICENSE.md