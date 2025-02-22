import { Bench } from 'tinybench'
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

const testCases = {
  shortArray: [shortArray1, shortArray2],
  longArray: [longArray1, longArray2],
  longArrayManyDuplicates: [longArrayManyDuplicates1, longArrayManyDuplicates2]
}
for (const testCase in testCases) {
  const bench = new Bench({ name: testCase, warmup: true })
  const [arr1, arr2] = testCases[testCase]
  for (const finder of finders) {
    bench.add(finder.name, () => {
      finder(arr1, arr2)
    })
  }
  await bench.run()
  console.log(bench.name)
  console.table(bench.table())
}
