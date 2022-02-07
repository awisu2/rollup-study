# rollup-study

ビルドツール rollup の勉強

- [rollup\.js](https://rollupjs.org/guide/en/)
- [npm publish する方法](https://github.com/awisu2/node-study/tree/main/howToPublish)

基本事項

- browser 用には **webpack**、node.js のライブラリ用には **rollup** とかの使い分けらしい
  - よくわかってないけれど
- `npx rollup -c` が最小コマンドかな(コンフィグファイルが必要, -c は省略できなかった)
- _rollup.config.js_ で config が記載できる(default 名)
  - 詳細は後述
- [using plugins](https://rollupjs.org/guide/en/#using-plugins)
  - commonjs のプラグインを追加: [plugins/packages/commonjs at master · rollup/plugins](https://github.com/rollup/plugins/tree/master/packages/commonjs)
  - [Plugin Development](https://rollupjs.org/guide/en/#plugin-development)
- [rollup api](https://rollupjs.org/guide/en/#javascript-api): `rollup.rollup`, `rollup.watch` がありカスタマイズが可能

## todos

- [ ] publish 後、install したとき default export ができてない
  - こう書かないといけない: `import * as anypackage from 'a2-hello-rollup'`

## hands up

```bash
npm install -D rollup
```

### コンパイル

--format オプションによりそれぞれに向けたコンパイルが可能

```bash
# for browser
npm run rollup src/main.js --file dist/browserBundle.js --format iife
# for node
npm run rollup src/main.js --file dist/nodeBundle.js --format cjs
# for umd (browser node)
npm run rollup src/main.js --file dist/umdBundle.js --format umd --name "myBundle"
```

note: [それぞれの出力結果](./docs/compiledResult.md)

## config 設定

公式(サンプルあり): [Configuration Files](https://rollupjs.org/guide/en/#configuration-files)

- 配列で export することで、複数の src 指定及び設定が可能
- typescript で書きたい場合: `--configPlugin typescript` とつける
- `(args) => rollupConfig` を export することで、args にコマンドラインの引数を取得して分岐が可能

## typescriipt 対応

typescript でトランスパイルし、npm publish 後に利用できるようにする(最低限)

```bash
yarn add -D @rollup/plugin-typescript typescript tslib
```

_tsconfig.json_

- 空でも OK
- ファイルが存在しないと _Error: Could not load {any file.ts}_ が発生する
- [typescript\-study/tsconfig\.md](https://github.com/awisu2/typescript-study/blob/main/docs/tsconfig.md)

```json
{}
```

_rollup.config.js_

- typescript へのオプション設定は, tsconfig.json に上書きされる
- declaration, declarationDir は d.ts を出力する設定

```js
const typescript = require("@rollup/plugin-typescript");

export default {
  input: "src/index.ts",
  preserveModules: true, // チャンクファイルに分割して出力(.d.tsファイル出力)
  output: {
    // file: 'dist/index.js',
    dir: "dist", // preserveModules: true の場合、fileではなくdirで設定
    format: "cjs",
  },
  plugins: [
    typescript({
      declaration: true, // タイプファイルの出力ON
      declarationDir: "dist/@types", // タイプファイルの出力先
    }),
  ],
};
```

_package.json_

private の解除と、types の設定(typescript での type 補完が有効になる)

```json
{
  ...
  "main": "dist/index.js",
  "types": "dist/@types/index.d.ts",
  ...
  "private": false,
}
```
