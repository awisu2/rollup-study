import { HELLOW } from './consts'
import axios from 'axios'

function hello(): string {
  return HELLOW
}

function getRequest(url: string, callback: (result: string, err: any) => void) {
  axios
    .get(url)
    .then((result) => {
      callback(result.data, null)
    })
    .catch((err) => {
      callback(null, err)
    })
}

export { hello, getRequest }
