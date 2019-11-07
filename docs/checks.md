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


<br><a name="is"></a>

### is : <code>object</code>
> Utility functions for checking if something is a particular data type.> > ``` javascript> import { is } from 'type-enforcer-ui';> > // Or import individual functions> import { isBoolean, isString } from 'type-enforcer-ui';> ```


* [is](#is) : <code>object</code>
    * [.cssSize(value, [coerce])](#is.cssSize) ⇒ <code>Boolean</code>
    * [.dockPoint(value, [coerce])](#is.dockPoint) ⇒ <code>Boolean</code>
    * [.element(value)](#is.element) ⇒ <code>Boolean</code>
    * [.thickness(value, [coerce])](#is.thickness) ⇒ <code>Boolean</code>


<br><a name="is.cssSize"></a>

#### is.cssSize(value, [coerce]) ⇒ <code>Boolean</code>
> Check if a value is a [CssSize](docs/CssSize.md)

**Alias:** `isCssSize`


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>\*</code> |  |  |
| [coerce] | <code>Boolean</code> | <code>false</code> | If true then see if the value can be coerced into a CssSize |

**Example**  
``` javascriptimport { isCssSize } from 'type-enforcer-ui';isCssSize(new CssSize());// => trueisCssSize('14px');// => falseisCssSize('14px', true);// => true```

<br><a name="is.dockPoint"></a>

#### is.dockPoint(value, [coerce]) ⇒ <code>Boolean</code>
> Check if a value is a [DockPoint](docs/DockPoint.md)

**Alias:** `isDockPoint`


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>\*</code> |  |  |
| [coerce] | <code>Boolean</code> | <code>false</code> | If true then see if the value can be coerced into a DockPoint |

**Example**  
``` javascriptimport { isDockPoint } from 'type-enforcer-ui';isDockPoint(new DockPoint());// => trueisDockPoint('top');// => falseisDockPoint('top', true);// => true```

<br><a name="is.element"></a>

#### is.element(value) ⇒ <code>Boolean</code>
> Check if a value is a DOM element

**Alias:** `isElement`


| Param | Type |
| --- | --- |
| value | <code>\*</code> | 

**Example**  
``` javascriptimport { isElement } from 'type-enforcer-ui';isElement(document.createElement('div'));// => true```

<br><a name="is.thickness"></a>

#### is.thickness(value, [coerce]) ⇒ <code>Boolean</code>
> Check if a value is a [Thickness](docs/Thickness.md)

**Alias:** `isThickness`


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>\*</code> |  |  |
| [coerce] | <code>Boolean</code> | <code>false</code> | If true then see if the value can be coerced into a Thickness |

**Example**  
``` javascriptimport { isThickness } from 'type-enforcer-ui';isThickness(new Thickness());// => trueisThickness('12px 20px');// => falseisThickness('12px 20px', true);// => true```

[npm]: https://img.shields.io/npm/v/type-enforcer-ui.svg
[npm-url]: https://npmjs.com/package/type-enforcer-ui
[build]: https://travis-ci.org/DarrenPaulWright/type-enforcer-ui.svg?branch&#x3D;master
[build-url]: https://travis-ci.org/DarrenPaulWright/type-enforcer-ui
[coverage]: https://coveralls.io/repos/github/DarrenPaulWright/type-enforcer-ui/badge.svg?branch&#x3D;master
[coverage-url]: https://coveralls.io/github/DarrenPaulWright/type-enforcer-ui?branch&#x3D;master
[deps]: https://david-dm.org/darrenpaulwright/type-enforcer-ui.svg
[deps-url]: https://david-dm.org/darrenpaulwright/type-enforcer-ui
[size]: https://packagephobia.now.sh/badge?p&#x3D;type-enforcer-ui
[size-url]: https://packagephobia.now.sh/result?p&#x3D;type-enforcer-ui
[vulnerabilities]: https://snyk.io/test/github/DarrenPaulWright/type-enforcer-ui/badge.svg?targetFile&#x3D;package.json
[vulnerabilities-url]: https://snyk.io/test/github/DarrenPaulWright/type-enforcer-ui?targetFile&#x3D;package.json
[license]: https://img.shields.io/github/license/DarrenPaulWright/type-enforcer-ui.svg
[license-url]: https://npmjs.com/package/type-enforcer-ui/LICENSE.md
