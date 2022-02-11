# my-template

my rollup template

```bash
npm install
npm run build
npm run test
```

NOTE

- this template contains
  - minify
  - typescript transpile
  - third party packages
  - test
- rollup.config.js
  - an notification will occur
    - if **preserveModules** set to true at build time
      - so axios has `export default`

## hands up

```bash
yarn init -p -y

# for resolve third paty
npm i @rollup/plugin-node-resolve
# for minify
npm i rollup-plugin-terser -D
# for typescript
npm i -D @rollup/plugin-typescript
npm i -D @rollup/plugin-commonjs @rollup/plugin-replace

# for sample
npm i axios -D
```

- @rollup/plugin-node-resolve, @rollup/plugin-commonjs, @rollup/plugin-replace

### config files

- [rollup.config.js](./rollup.config.js)
- [tsconfig.json](./tsconfig.json)
