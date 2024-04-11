const { test, describe } = require('node:test')
const assert = require('node:assert')

const reverse = require('../utils/for_testing').reverse
const average = require('../utils/for_testing').average
//funciona
test('reverse of a', () => {
  const result = reverse('a')

  assert.strictEqual(result, 'a')
})
//funciona
test('reverse of react', () => {
  const result = reverse('react')

  assert.strictEqual(result, 'tcaer')
})
//funciona
test('reverse of saippuakauppias', () => {
  const result = reverse('saippuakauppias')

  assert.strictEqual(result, 'saippuakauppias')
})

describe('average', () => {
  //funciona
  test('of one value is the value itself', () => {
    assert.strictEqual(average([1]), 1)
  })
  //funciona
  test('of many is calculated right', () => {
    assert.strictEqual(average([1, 2, 3, 4, 5, 6]), 3.5)
  })
  //funciona
  test('of empty array is zero', () => {
    assert.strictEqual(average([]), 0)
  })
})