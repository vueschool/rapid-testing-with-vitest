import { test, expect } from 'vitest'
import { createApp } from 'vue'
import Example from '../src/Example.vue'

test('advanced', () => {
  const el = document.createElement('div')
  const app = createApp(Example)
  app.mount(el)
  
  expect(el.textContent).toBe(' Hello ! ')
})
