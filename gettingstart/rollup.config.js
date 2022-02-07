const typescript = require('@rollup/plugin-typescript')

export default {
  input: 'src/index.ts',
  preserveModules: true, // チャンクファイルに分割して出力(.d.tsファイル出力)
  output: {
    // file: 'dist/index.js',
    dir: 'dist', // preserveModules: true の場合、fileではなくdirで設定
    format: 'cjs'
  },
  plugins: [
    typescript({
      declaration: true, // .d.ts ファイルの出力ON/OFF
      declarationDir: 'dist/@types' // .d.ts タイプファイルの出力先
    })
  ]
}
