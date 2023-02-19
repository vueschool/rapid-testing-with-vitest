import { test, expect, vi } from 'vitest'
import { loadConfig } from '../src/fs'

vi.mock('fs', async () => {
  const actual = await vi.importActual('fs') as typeof import('fs')
  return {
    ...actual,
    existsSync() {
      return true
    },
    readFileSync() {
      return '{ "name": "mocked" }'
    }
  }
})

test('with fs', async () => {
  const result = await loadConfig()
  expect(result).toEqual({ name: 'mocked' })
})
