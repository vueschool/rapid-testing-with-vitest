import { ref, watch } from 'vue'

export function useTitle() {
  const title = ref(document.title)
  
  watch(title, () => {
    document.title = title.value
  }, { flush: 'sync' })

  return title
}
