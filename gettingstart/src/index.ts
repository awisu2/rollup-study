import * as consts from './consts'

class Hello {
  hello(): string {
    return consts.hello
  }
}

function hello(): string {
  const _hello = new Hello()
  return _hello.hello()
}

export { hello }
