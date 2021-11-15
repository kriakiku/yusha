<template>
  <div v-if="!isServcer">
    <NuxtPage/>
  </div>
</template>

<script setup>
const isServcer = process.server
</script>