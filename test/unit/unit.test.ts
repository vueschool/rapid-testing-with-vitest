import { test, expect } from 'vitest'

test('this is a simple test does not need DOM', () => {
  expect(1 + 1).toBe(2)
})


test('make sure DOM is not available', () => {
  expect(typeof document)
    .toBe('undefined')
})
