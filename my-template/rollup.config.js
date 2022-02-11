const typescript = require('@rollup/plugin-typescript')
import { terser } from 'rollup-plugin-terser'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'

export default {
  input: 'src/index.ts',
  output: {
    dir: 'dist', // preserveModules: true の場合、fileではなくdirで設定
    format: 'cjs'
  },
  plugins: [
    terser(), // minify
    nodeResolve(),
    commonjs({}),
    typescript({
      declaration: true, // .d.ts ファイルの出力ON/OFF
      declarationDir: 'dist/@types' // .d.ts タイプファイルの出力先
    })
  ]
}
