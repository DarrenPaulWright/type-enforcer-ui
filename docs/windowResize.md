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


<br><a name="windowResize"></a>

### windowResize ⇐ <code>[Queue](https://github.com/DarrenPaulWright/type-enforcer/blob/master/docs/Queue.md)</code>
> Executes callbacks whenever the screen is resized (throttled at 100ms) or explicitly triggered

**Extends**: <code>[Queue](https://github.com/DarrenPaulWright/type-enforcer/blob/master/docs/Queue.md)</code>  

* [windowResize](#windowResize) ⇐ <code>[Queue](https://github.com/DarrenPaulWright/type-enforcer/blob/master/docs/Queue.md)</code>
    * [.width](#windowResize+width) ⇒ <code>number</code>
    * [.height](#windowResize+height) ⇒ <code>number</code>
    * [.trigger([id])](#windowResize+trigger)


<br><a name="windowResize+width"></a>

#### windowResize.width ⇒ <code>number</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_`🔒 Read only`_

> Get the current width of the window.


<br><a name="windowResize+height"></a>

#### windowResize.height ⇒ <code>number</code>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_`🔒 Read only`_

> Get the current height of the window.


<br><a name="windowResize+trigger"></a>

#### windowResize.trigger([id])
> Triggers one or all callbacks. Two arguments are passed to the callback: width and height. If an id is provided then the callback is called immediately, otherwise the call is debounced.


| Param | Type | Description |
| --- | --- | --- |
| [id] | <code>Number</code> | To trigger only a specific callback, provide the id returned by windowResize.add().     Otherwise all callbacks are called. |


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
