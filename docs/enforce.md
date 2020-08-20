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


<br><a name="enforce"></a>

## enforce : <code>object</code>
> Utility functions for enforcing data types. Includes all the enforcers from [type-enforcer](https://github.com/DarrenPaulWright/type-enforcer) and [type-enforcer-math](https://github.com/DarrenPaulWright/type-enforcer-math).

**Example**  
``` javascriptimport { enforce } from 'type-enforcer-ui';// Or import individual functionsimport { enforceBoolean, enforceString } from 'type-enforcer-ui';```

* [enforce](#enforce) : <code>object</code>
    * [.cssSize(value, alt, [coerce])](#enforce.cssSize) ⇒ <code>CssSize</code>
    * [.dockPoint(value, alt, [coerce])](#enforce.dockPoint) ⇒ <code>DockPoint</code>
    * [.element(value, alt)](#enforce.element) ⇒ <code>Element</code>
    * [.thickness(value, alt, [coerce])](#enforce.thickness) ⇒ <code>Thickness</code>


<br><a name="enforce.cssSize"></a>

### enforce.cssSize(value, alt, [coerce]) ⇒ <code>CssSize</code>
> Enforce that a value is a [CssSize](docs/CssSize.md). Uses [isCssSize](docs/checks.md#isCssSize).

**Alias:** `enforceCssSize`


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>\*</code> |  |  |
| alt | <code>CssSize</code> |  | Returned if the value is not the correct type |
| [coerce] | <code>Boolean</code> | <code>false</code> | If true then coerce the value when possible |

**Example**  
``` javascriptimport { enforce } from 'type-enforcer-ui';enforce.cssSize(new CssSize('14px'), new CssSize());// => cssSize of 14pxenforce.cssSize('14px', new CssSize());// => cssSize of 0enforce.cssSize('14px', new CssSize(), true);// => cssSize of 14px```

<br><a name="enforce.dockPoint"></a>

### enforce.dockPoint(value, alt, [coerce]) ⇒ <code>DockPoint</code>
> Enforce that a value is a [DockPoint](docs/DockPoint.md). Uses [isDockPoint](docs/checks.md#isDockPoint).

**Alias:** `enforceDockPoint`


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>\*</code> |  |  |
| alt | <code>String</code> |  | Returned if the value is not the correct type |
| [coerce] | <code>Boolean</code> | <code>false</code> | If true then coerce the value when possible |

**Example**  
``` javascriptimport { enforce } from 'type-enforcer-ui';enforce.dockPoint(new DockPoint(DockPoint.POINTS.TOP), new DockPoint(DockPoint.POINTS.BOTTOM));// => dockPoint of topenforce.dockPoint('top', new DockPoint(DockPoint.POINTS.BOTTOM));// => dockPoint of bottomenforce.dockPoint('top', new DockPoint(DockPoint.POINTS.BOTTOM), true);// => dockPoint of top```

<br><a name="enforce.element"></a>

### enforce.element(value, alt) ⇒ <code>Element</code>
> Enforce that a value is a DOM element. Uses [isElement](docs/checks.md#isElement).

**Alias:** `enforceElement`


| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> |  |
| alt | <code>Element</code> | Returned if the value is not the correct type |

**Example**  
``` javascriptimport { enforce } from 'type-enforcer-ui';enforce.element(document.createElement('span'), document.createElement('div'));// => a span elementenforce.element('span', document.createElement('div'));// => a div elementenforce.element('span', document.createElement('div'), true);// => a span element```

<br><a name="enforce.thickness"></a>

### enforce.thickness(value, alt, [coerce]) ⇒ <code>Thickness</code>
> Enforce that a value is a [Thickness](docs/Thickness.md). Uses [isThickness](docs/checks.md#isThickness).

**Alias:** `enforceThickness`


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| value | <code>\*</code> |  |  |
| alt | <code>Thickness</code> |  | Returned if the value is not the correct type |
| [coerce] | <code>Boolean</code> | <code>false</code> | If true then coerce the value when possible |

**Example**  
``` javascriptimport { enforce } from 'type-enforcer-ui';enforce.thickness(new Thickness('12px 20px'), new Thickness());// => thickness of '12px 20px'enforce.thickness('12px 20px', new Thickness());// => thickness of 0enforce.thickness('12px 20px', new Thickness(), true);// => thickness of '12px 20px'```

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
