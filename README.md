
<h1 align="center">pico-uid</h1>
<div align="center">
  <strong>Tiny Unique ID generator</strong>
</div>
<br>
<div align="center">
  <a href="https://npmjs.org/package/pico-uid">
    <img src="https://img.shields.io/npm/v/pico-uid.svg?style=flat-square" alt="npm package version" />
  </a>
  <a href="https://npmjs.org/package/pico-uid">
  <img src="https://img.shields.io/npm/dm/pico-uid.svg?style=flat-square" alt="npm downloads" />
  </a>
  <a href="https://github.com/feross/standard">
    <img src="https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square" alt="standard JS linter" />
  </a>
  <a href="https://github.com/prettier/prettier">
    <img src="https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=flat-square" alt="prettier code formatting" />
  </a>
  <a href="https://travis-ci.org/tiaanduplessis/pico-uid">
    <img src="https://img.shields.io/travis/tiaanduplessis/pico-uid.svg?style=flat-square" alt="travis ci build status" />
  </a>
  <a href="https://github.com/tiaanduplessis/pico-uid/blob/master/LICENSE">
    <img src="https://img.shields.io/npm/l/pico-uid.svg?style=flat-square" alt="project license" />
  </a>
  <a href="http://makeapullrequest.com">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" alt="make a pull request" />
  </a>
</div>
<br>

<h2>Table of Contents</h2>
<details>
  <summary>Table of Contents</summary>
  <li><a href="#install">Install</a></li>
  <li><a href="#usage">Usage</a></li>
  <li><a href="#contribute">Contribute</a></li>
  <li><a href="#license">License</a></li>
</details>

## Install

```sh
$ npm install pico-uid
# OR
$ yarn add pico-uid
```

## Usage

```js
const uid = require('pico-uid')

uid(10) // Request UID with length of 10
uid(5, 16) // Request UID with length of 5 using radix of 16 rather than default of 64
```

## Contributing

Contributions are welcome!

1. Fork it.
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

Or open up [a issue](https://github.com/tiaanduplessis/pico-uid/issues).

## License

Licensed under the MIT License.
