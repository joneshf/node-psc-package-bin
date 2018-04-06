# [psc-package](https://github.com/purescript/psc-package) wrapper for [Node.js](https://nodejs.org/)

[![NPM version](http://img.shields.io/npm/v/psc-package.svg)](https://www.npmjs.com/package/psc-package)
[![Build Status](http://img.shields.io/travis/joneshf/node-psc-package-bin.svg)](http://travis-ci.org/joneshf/node-psc-package-bin)
[![Coverage Status](https://img.shields.io/coveralls/joneshf/node-psc-package-bin.svg)](https://coveralls.io/github/joneshf/node-psc-package-bin?branch=master)
[![dependencies Status](https://david-dm.org/joneshf/node-psc-package-bin/status.svg)](https://david-dm.org/joneshf/node-psc-package-bin)
[![devDependencies Status](https://david-dm.org/joneshf/node-psc-package-bin/dev-status.svg)](https://david-dm.org/joneshf/node-psc-package-bin?type=dev)

[psc-package](https://github.com/purescript/psc-package) binary wrapper that makes it seamlessly available via [npm](https://www.npmjs.com/)

## Installation

[Use npm](https://docs.npmjs.com/cli/install) after making sure your development environment satisfies [the requirements](https://github.com/purescript/purescript/blob/ab5f139336c7343009e88c13b29c9cdf566b1713/INSTALL.md#the-curses-library).

```
npm install psc-package
```

## API

### require('psc-package')

Type: `String`

The path to the `psc-package` binary.

## CLI

You can use it via CLI by installing it [globally](https://docs.npmjs.com/files/folders#global-installation).

```
npm install -g psc-package

psc-package --help
```

## Releases

New versions are published when CI succeeds on a tag.
To cut a new version:

1. Ensure the version in [package.json](./package.json) has been updated.
1. Draft a [new release](https://github.com/joneshf/node-psc-package-bin/releases/new).
1. Name the tag with a `v` prefix and the version to release.

    <img src="https://user-images.githubusercontent.com/1356417/38399010-87bb9364-38fc-11e8-8c9b-d793b7bc43c9.png" />
1. Choose a specific commit rather than a branch.

    <img src="https://user-images.githubusercontent.com/1356417/38398813-29fe09a6-38fb-11e8-8531-df121f6d221c.png" />
1. Publish the release.

    <img src="https://user-images.githubusercontent.com/1356417/38398905-df501f1a-38fb-11e8-9fbf-ff41f016ebe9.png" />
1. CI will run. Assuming everything builds properly, it will [deploy the new version to the npm registry](https://travis-ci.org/joneshf/node-psc-package-bin/builds/362894900#L1255-L1306).
1. Verify the version was released on [npm](https://www.npmjs.com/package/psc-package).

    <img src="https://user-images.githubusercontent.com/1356417/38398958-2c4c423a-38fc-11e8-9675-f12ccdcdc860.png" />

## License

Original Copyright (c) 2015 - 2017 [Shinnosuke Watanabe](https://github.com/shinnn)
Copyright (c) 2017-2018 [Hardy Jones](https://github.com/joneshf)

Licensed under [the MIT License](./LICENSE).
