import test from 'node:test'
import { deepStrictEqual } from 'node:assert'
import loadCommonElementsFinders from './loader.js'
import generateTestCase from './generate-test-case.js'
import referenceSolution from './approaches/base.js'
const finders = await loadCommonElementsFinders()

const SHORT_ARRAY_SIZE = 10
const LONG_ARRAY_SIZE = 1_000

const SHORT_MAX_VALUE = 10
const LONG_MAX_VALUE = 1_000

const shortArray1 = generateTestCase(SHORT_ARRAY_SIZE, 0, SHORT_MAX_VALUE)
const shortArray2 = generateTestCase(SHORT_ARRAY_SIZE, 0, SHORT_MAX_VALUE)
const shortArrayExpected = referenceSolution(shortArray1, shortArray2).sort()

const longArray1 = generateTestCase(LONG_ARRAY_SIZE, 0, LONG_MAX_VALUE)
const longArray2 = generateTestCase(LONG_ARRAY_SIZE, 0, LONG_MAX_VALUE)
const longArrayExpected = referenceSolution(longArray1, longArray2).sort()

const longArrayManyDuplicates1 = generateTestCase(
  LONG_ARRAY_SIZE,
  0,
  SHORT_MAX_VALUE
)
const longArrayManyDuplicates2 = generateTestCase(
  LONG_ARRAY_SIZE,
  0,
  SHORT_MAX_VALUE
)
const longArrayManyDuplicatesExpected = referenceSolution(
  longArrayManyDuplicates1,
  longArrayManyDuplicates2
).sort()

// lower the value of extremeArrayLength to 10_000 to avoid performance issues
const extremeArrayLength = 10_000
const extremeArray1 = Array.from(
  { length: extremeArrayLength },
  (_, i) => (i * 0b011) % extremeArrayLength
)
const extremeArray2 = Array.from(
  { length: extremeArrayLength },
  (_, i) => (i * 0b101) % extremeArrayLength
)
const extremeArrayExpected = referenceSolution(
  extremeArray1,
  extremeArray2
).sort()

const testCases = {
  shortArray: [shortArray1, shortArray2, shortArrayExpected],
  longArray: [longArray1, longArray2, longArrayExpected],
  longArrayManyDuplicates: [
    longArrayManyDuplicates1,
    longArrayManyDuplicates2,
    longArrayManyDuplicatesExpected
  ],
  extremeArray: [extremeArray1, extremeArray2, extremeArrayExpected]
}

for (const testCase in testCases) {
  const [arr1, arr2, expected] = testCases[testCase]
  test(testCase, async t => {
    for (const finder of finders) {
      await t.test(finder.name, () => {
        deepStrictEqual(finder(arr1, arr2).sort(), expected)
      })
    }
  })
}
