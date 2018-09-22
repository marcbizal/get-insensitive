[![Build Status](https://travis-ci.org/marcbizal/get-insensitive.svg?branch=master)](https://travis-ci.org/marcbizal/get-insensitive)
[![Coverage Status](https://coveralls.io/repos/github/marcbizal/get-insensitive/badge.svg?branch=master)](https://coveralls.io/github/marcbizal/get-insensitive?branch=master)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

`getInsensitive` does exactly the same as [lodash `get`](https://lodash.com/docs/4.17.10#get), except case insensitivly.

`getInsensitive` will run in `O(n)` worst-case or `O(1)` best-case. If you don't need case insensitivity use `_.get` for `O(1)` runtime.
