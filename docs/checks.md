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


<br><a name="is"></a>

### is : <code>object</code>
> Utility functions for checking if something is a particular data type.> > ``` javascript> import { is } from 'type-enforcer-ui-addon';> > // Or import individual functions> import { isBoolean, isString } from 'type-enforcer-ui-addon';> ```


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
``` javascriptimport { isCssSize } from 'type-enforcer-ui-addon';isCssSize(new CssSize());// => trueisCssSize('14px');// => falseisCssSize('14px', true);// => true```

<br><a name="is.dockPoint"></a>

#### is.dockPoint(value, [coerce]) ⇒ <code>Boolean</code>
> Check if a value is a [DockPoint](docs/DockPoint.md)

**Alias:** `isDockPoint`


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>\*</code> |  |  |
| [coerce] | <code>Boolean</code> | <code>false</code> | If true then see if the value can be coerced into a DockPoint |

**Example**  
``` javascriptimport { isDockPoint } from 'type-enforcer-ui-addon';isDockPoint(new DockPoint());// => trueisDockPoint('top');// => falseisDockPoint('top', true);// => true```

<br><a name="is.element"></a>

#### is.element(value) ⇒ <code>Boolean</code>
> Check if a value is a DOM element

**Alias:** `isElement`


| Param | Type |
| --- | --- |
| value | <code>\*</code> | 

**Example**  
``` javascriptimport { isElement } from 'type-enforcer-ui-addon';isElement(document.createElement('div'));// => true```

<br><a name="is.thickness"></a>

#### is.thickness(value, [coerce]) ⇒ <code>Boolean</code>
> Check if a value is a [Thickness](docs/Thickness.md)

**Alias:** `isThickness`


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>\*</code> |  |  |
| [coerce] | <code>Boolean</code> | <code>false</code> | If true then see if the value can be coerced into a Thickness |

**Example**  
``` javascriptimport { isThickness } from 'type-enforcer-ui-addon';isThickness(new Thickness());// => trueisThickness('12px 20px');// => falseisThickness('12px 20px', true);// => true```

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
