<script setup>
import { useCycleList } from './useCycleList';

const items = [
  'apple',
  'banana',
  'orange'
]

const { current, prev, next } = useCycleList(items)
</script>

<template>
  <div>
    <button @click="prev">Prev</button>
    <div>{{ current }}</div>
    <button @click="next">Next</button>
  </div>
</template>
