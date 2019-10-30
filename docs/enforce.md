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


<br><a name="enforce"></a>

### enforce : <code>object</code>
> Utility functions for enforcing data types.


* [enforce](#enforce) : <code>object</code>
    * [.cssSize(value, alt, [coerce])](#enforce.cssSize) ⇒ <code>CssSize</code>
    * [.dockPoint(value, alt, [coerce])](#enforce.dockPoint) ⇒ <code>DockPoint</code>
    * [.element(value, alt)](#enforce.element) ⇒ <code>Element</code>
    * [.thickness(value, alt, [coerce])](#enforce.thickness) ⇒ <code>Thickness</code>


<br><a name="enforce.cssSize"></a>

#### enforce.cssSize(value, alt, [coerce]) ⇒ <code>CssSize</code>
> Enforce that a value is a [CssSize](docs/CssSize.md). Uses [isCssSize](docs/checks.md#isCssSize).

**Alias:** `enforceCssSize`


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>\*</code> |  |  |
| alt | <code>CssSize</code> |  | Returned if the value is not the correct type |
| [coerce] | <code>Boolean</code> | <code>false</code> | If true then coerce the value when possible |

**Example**  
``` javascript

<br><a name="enforce.dockPoint"></a>

#### enforce.dockPoint(value, alt, [coerce]) ⇒ <code>DockPoint</code>
> Enforce that a value is a [DockPoint](docs/DockPoint.md). Uses [isDockPoint](docs/checks.md#isDockPoint).

**Alias:** `enforceDockPoint`


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>\*</code> |  |  |
| alt | <code>String</code> |  | Returned if the value is not the correct type |
| [coerce] | <code>Boolean</code> | <code>false</code> | If true then coerce the value when possible |

**Example**  
``` javascript

<br><a name="enforce.element"></a>

#### enforce.element(value, alt) ⇒ <code>Element</code>
> Enforce that a value is a DOM element. Uses [isElement](docs/checks.md#isElement).

**Alias:** `enforceElement`


| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> |  |
| alt | <code>Element</code> | Returned if the value is not the correct type |

**Example**  
``` javascript

<br><a name="enforce.thickness"></a>

#### enforce.thickness(value, alt, [coerce]) ⇒ <code>Thickness</code>
> Enforce that a value is a [Thickness](docs/Thickness.md). Uses [isThickness](docs/checks.md#isThickness).

**Alias:** `enforceThickness`


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>\*</code> |  |  |
| alt | <code>Thickness</code> |  | Returned if the value is not the correct type |
| [coerce] | <code>Boolean</code> | <code>false</code> | If true then coerce the value when possible |

**Example**  
``` javascript

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