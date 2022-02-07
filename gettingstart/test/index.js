var assert = require('assert')
var { hello } = require('../dist/index')
var a = require('../dist/index')

describe('index.js', function () {
  it('hello"', function () {
    assert.equal(hello(), 'hello world')
  })

  it('default export"', function () {
    assert.equal(a.hello(), 'hello world')
  })
})
