import { run, bench, group, summary } from 'mitata'
import loadCommonElementsFinders from './loader.js'
import generateTestCase from './generate-test-case.js'

const finders = await loadCommonElementsFinders()

const SHORT_ARRAY_SIZE = 10
const LONG_ARRAY_SIZE = 1_000

const SHORT_MAX_VALUE = 10
const LONG_MAX_VALUE = 1000

const shortArray1 = generateTestCase(SHORT_ARRAY_SIZE, 0, SHORT_MAX_VALUE)
const shortArray2 = generateTestCase(SHORT_ARRAY_SIZE, 0, SHORT_MAX_VALUE)

const longArray1 = generateTestCase(LONG_ARRAY_SIZE, 0, LONG_MAX_VALUE)
const longArray2 = generateTestCase(LONG_ARRAY_SIZE, 0, LONG_MAX_VALUE)

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

const extremeArrayLength = 1_000_000
const extremeArray1 = Array.from(
  { length: extremeArrayLength },
  (_, i) => (i * 0b011) % extremeArrayLength
)
const extremeArray2 = Array.from(
  { length: extremeArrayLength },
  (_, i) => (i * 0b101) % extremeArrayLength
)

const testCases = {
  shortArray: [shortArray1, shortArray2],
  longArray: [longArray1, longArray2],
  longArrayManyDuplicates: [longArrayManyDuplicates1, longArrayManyDuplicates2],
  extremeArray: [extremeArray1, extremeArray2]
}
for (const testCase in testCases) {
  const [arr1, arr2] = testCases[testCase]
  group(testCase, () => {
    summary(() => {
      for (const finder of finders) {
        if(finder.name.startsWith('base') && testCase === 'extremeArray') continue
        bench(finder.name, () => {
          finder(arr1, arr2)
        })
      }
    })
  })
}
await run()
