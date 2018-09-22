const test = require('ava')
const baseGetInsensitive = require('../src/base-get-insensitive')

const object = { a: [{ b: { c: 3 } }] }

test('gets item with case insensitive string path', t => {
  const item = baseGetInsensitive(object, 'A[0].b.c')
  t.is(item, 3)
})

test('gets item with case insensitive array path', t => {
  const item = baseGetInsensitive(object, ['a', '0', 'B', 'c'])
  t.is(item, 3)
})

test('gets item at root with case insensitive string path', t => {
  const item = baseGetInsensitive(object, 'A')
  t.deepEqual(item, [{ b: { c: 3 } }])
})

test('gets item at root with case insensitive array path', t => {
  const item = baseGetInsensitive(object, ['A'])
  t.deepEqual(item, [{ b: { c: 3 } }])
})
