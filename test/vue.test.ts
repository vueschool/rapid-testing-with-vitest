import { test, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Example from '../src/Example.vue'

test('component', () => {
  expect(Example).toBeDefined()

  const wrapper = mount(Example)

  expect(wrapper.text()).toBe('Hello !')
})

test('component with props', () => {
  expect(Example).toBeDefined()

  const wrapper = mount(Example, {
    props: {
      name: 'Vitest'
    }
  })

  expect(wrapper.text()).toBe('Hello Vitest!')
})
