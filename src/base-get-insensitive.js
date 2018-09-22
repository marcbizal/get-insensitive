const isEmpty = require('lodash.isempty')
const head = require('lodash.head')
const toPairs = require('lodash.topairs')
const drop = require('lodash.drop')

const castPath = require('./cast-path')

function baseGetInsensitive(object, path) {
  path = castPath(path)

  if (isEmpty(path)) return object

  const first = head(path)
  const pair = toPairs(object).find(
    ([key]) => key.toLowerCase() === first.toLowerCase()
  )

  return pair ? baseGetInsensitive(pair[1], drop(path)) : undefined
}

module.exports = baseGetInsensitive
