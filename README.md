# s2s-hook-tslint

tslint for [s2s](https://github.com/akameco/s2s)

## Example

```javascript
const tslint = require('s2s-hook-tslint').default;

module.exports = {
  watch: './**/*.ts',
  plugins: [
    // plugins...
  ],
  prettier: false,
  afterHooks: [
    tslint({
      test: /\.(ts|tsx)/,
    })
  ]
}
```

## Options

### test

type: regex | path => boolean
