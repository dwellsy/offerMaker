import { testNoEmptyKeysInJSON } from './testNoEmptyKeys.js'

test("any empty key should fail", () => {
  const badObject = {
    "key1": "",
    "key2": "value2",
  }
  expect(testNoEmptyKeysInJSON(badObject)).toBe(false)
})

test("objects with zero empty keys should pass", () => {
  const goodObject = {
    "key1": "value1",
    "key2": "value2",
  }
  expect(testNoEmptyKeysInJSON(goodObject)).toBe(true)
})