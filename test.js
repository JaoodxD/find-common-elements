import test from 'node:test'
import { deepStrictEqual } from 'node:assert'
import loadCommonElementsFinders from './loader.js'
import referenceSolution from './approaches/base.js'
const finders = await loadCommonElementsFinders()

for (const finder of finders) {
  test(finder.name, async t => {
    await t.test('Simple', () => {
      const arr1 = [1, 2, 3]
      const arr2 = [3, 4, 5]
      const expected = referenceSolution(arr1, arr2)
      const result = finder(arr1, arr2)
      const sorted = result.toSorted((a, b) => a - b)
      deepStrictEqual(sorted, expected)
    })

    await t.test('Empty', () => {
      const arr1 = []
      const arr2 = []
      const expected = referenceSolution(arr1, arr2)
      const result = finder(arr1, arr2)
      const sorted = result.toSorted((a, b) => a - b)
      deepStrictEqual(sorted, expected)
    })

    await t.test('No common elements', () => {
      const arr1 = [1, 2, 3]
      const arr2 = [4, 5, 6]
      const expected = referenceSolution(arr1, arr2)
      const result = finder(arr1, arr2)
      const sorted = result.toSorted((a, b) => a - b)
      deepStrictEqual(sorted, expected)
    })

    await t.test('All common elements', () => {
      const arr1 = [1, 2, 3]
      const arr2 = [1, 2, 3]
      const expected = referenceSolution(arr1, arr2)
      const result = finder(arr1, arr2)
      const sorted = result.toSorted((a, b) => a - b)
      deepStrictEqual(sorted, expected)
    })

    await t.test('Repeated common elements', () => {
      const arr1 = [1, 1, 2, 2, 3, 3]
      const arr2 = [1, 2, 3]
      const expected = referenceSolution(arr1, arr2)
      const result = finder(arr1, arr2)
      const sorted = result.toSorted((a, b) => a - b)
      deepStrictEqual(sorted, expected)
    })

    await t.test('Repeated commons elements in both arrays', () => {
      const arr1 = [1, 2, 2, 3]
      const arr2 = [2, 3, 3, 4]
      const expected = referenceSolution(arr1, arr2)
      const result = finder(arr1, arr2)
      const sorted = result.toSorted((a, b) => a - b)
      deepStrictEqual(sorted, expected)
    })

    await t.test('0s and 1s', () => {
      const arr1 = [0, 0, 1, 1, 1, 1]
      const arr2 = [0, 0, 0, 1, 1, 1]
      const expected = referenceSolution(arr1, arr2)
      const result = finder(arr1, arr2)
      const sorted = result.toSorted((a, b) => a - b)
      deepStrictEqual(sorted, expected)
    })
  })
}
