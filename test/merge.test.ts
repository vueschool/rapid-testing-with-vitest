import { test, expect } from 'vitest'
import { deepMerge } from '../src'

test('shallow merge', () => {
  const merged = deepMerge(
    {
      name: 'Anthony'
    },
    {
      github: 'antfu'
    }
  )

  expect(merged).toEqual({
    name: 'Anthony',
    github: 'antfu'
  })
})

test('shallow merge with overlaps', () => {
  const merged = deepMerge(
    {
      name: 'Anthony',
      github: 'unknown'
    },
    {
      github: 'antfu',
      twitter: 'antfu7'
    }
  )

  expect(merged).toEqual({
    name: 'Anthony',
    github: 'antfu',
    twitter: 'antfu7'
  })
})


test('shallow merge with arrays', () => {
  const merged = deepMerge(
    ['vue', 'react'],
    ['svelte', 'solid']
  )

  expect(merged).toEqual([
    'vue', 'react', 'svelte', 'solid'
  ])
})
