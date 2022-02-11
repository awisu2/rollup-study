var assert = require('assert')
var { hello, getRequest } = require('../dist/index')

describe('Index', function () {
  describe('hello', function () {
    var ret = hello()

    it('hello world', function () {
      assert.equal(ret, 'hello world')
    })
  })

  describe('request', function () {
    it('getRequest', function () {
      getRequest('https://www.google.com/', (ret, err) => {
        assert.ok(!err)
      })
    })
  })
})
