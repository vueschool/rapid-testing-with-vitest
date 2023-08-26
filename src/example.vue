<script setup>
const items = [
  'apple',
  'banana',
  'orange'
]

const current = ref(items[0])

function next() {
  const index = items.indexOf(current.value)
  current.value = items[(index + 1) % items.length]
}

function prev() {
  const index = items.indexOf(current.value)
  current.value = items[(index - 1 + items.length) % items.length]
}
</script>

<template>
  <div>
    <button @click="prev">Prev</button>
    <div>{{ current }}</div>
    <button @click="next">Next</button>
  </div>
</template>
