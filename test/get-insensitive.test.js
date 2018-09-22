const test = require('ava')
const getInsensitive = require('../src/get-insensitive')

const object = { a: [{ b: { c: 3 } }] }

test('returns default if item is not found at path', t => {
  const item = getInsensitive(object, 'a.b.c', 'default')
  t.is(item, 'default')
})

test('returns existing item with case insensitive string path', t => {
  const item = getInsensitive(object, 'A[0].b.c')
  t.is(item, 3)
})

test('returns undefined if object is null', t => {
  const item = getInsensitive(null, 'a[0].b.c')
  t.is(item, undefined)
})

test('returns object for invalid path', t => {
  const item = getInsensitive(object, { name: 'Skywalker' })
  t.is(item, object)
})
