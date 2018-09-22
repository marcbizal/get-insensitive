const isNull = require('lodash.isnull')
const baseGetInsensitive = require('./base-get-insensitive')

function getInsensitive(object, path, defaultValue) {
  const result = isNull(object) ? undefined : baseGetInsensitive(object, path)
  return result === undefined ? defaultValue : result
}

module.exports = getInsensitive
