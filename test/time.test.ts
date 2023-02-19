import { test, expect, vi } from 'vitest'

function getCurrentTime() {
  return new Date().toTimeString().slice(0, 5);
}

test('time', () => {
  vi.setSystemTime(new Date('2000-1-1 14:13'))
  expect(getCurrentTime()).toBe('14:13')

  vi.setSystemTime(new Date('2000-1-1 02:00'))
  expect(getCurrentTime()).toBe('02:00')

  vi.useRealTimers()
})
