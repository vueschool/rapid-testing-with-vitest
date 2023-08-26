import { ref } from 'vue'

export function useCycleList(items) {
  const current = ref(items[0])

  function next() {
    const index = items.indexOf(current.value)
    current.value = items[(index + 1) % items.length]
  }

  function prev() {
    const index = items.indexOf(current.value)
    current.value = items[(index - 1 + items.length) % items.length]
  }

  return {
    current,
    next,
    prev
  }
}
