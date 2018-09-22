const isArray = require('lodash.isarray')
const isString = require('lodash.isstring')
const isEmpty = require('lodash.isempty')

function castPath(path) {
  if (isArray(path)) return path
  if (isString(path))
    return path.split(/[.[\]]/g).filter(token => !isEmpty(token))
  return undefined
}

module.exports = castPath
