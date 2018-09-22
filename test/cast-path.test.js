const test = require('ava')
const castPath = require('../src/cast-path')

test('will cast path with dot syntax', t => {
  const path = castPath('alpha.BETA.Gamma')
  t.deepEqual(path, ['alpha', 'BETA', 'Gamma'])
})

test('will cast path with bracket syntax', t => {
  const path = castPath('A[0].b.c')
  t.deepEqual(path, ['A', '0', 'b', 'c'])
})

test('will return undefined if not array or string', t => {
  const path = castPath({ name: 'Skywalker' })
  t.is(path, undefined)
})
