<template>
  <div class="mt-4 border p-2">
    <h2 class="font-bold">Book Details</h2>
    <p><strong>Name:</strong> {{ book.name }}</p>
    <p><strong>Author:</strong> {{ book.author }}</p>
    <p><strong>Year:</strong> {{ book.year }}</p>
  </div>
</template>

<script setup>
const props = defineProps({ book: Object })
</script>
