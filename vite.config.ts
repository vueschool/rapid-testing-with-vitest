import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    environmentMatchGlobs: [
      ['test/dom/**', 'happy-dom']
    ]
  }
})
