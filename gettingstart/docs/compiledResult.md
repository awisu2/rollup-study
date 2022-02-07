# compilesResult

ドキュメントにある内容での出力結果

_main.js_

```js
function hello() {
  return 'hello'
}

export { hello }
```

## for browser

`rollup main.js --file dist/browserBundle.js --format iife`

```js
;(function (exports) {
  'use strict'

  function hello() {
    return 'hello'
  }

  exports.hello = hello

  Object.defineProperty(exports, '__esModule', { value: true })

  return exports
})({})
```

## for node

`rollup main.js --file dist/nodeBundle.js --format cjs`

```js
'use strict'

Object.defineProperty(exports, '__esModule', { value: true })

function hello() {
  return 'hello'
}

exports.hello = hello
```

## for umd (node and browser)

`rollup main.js --file dist/umdBundle.js --format umd --name \"myBundle\"`

```js
;(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined'
    ? factory(exports)
    : typeof define === 'function' && define.amd
    ? define(['exports'], factory)
    : ((global = typeof globalThis !== 'undefined' ? globalThis : global || self),
      factory((global.myBundle = {})))
})(this, function (exports) {
  'use strict'

  function hello() {
    return 'hello'
  }

  exports.hello = hello

  Object.defineProperty(exports, '__esModule', { value: true })
})
```
