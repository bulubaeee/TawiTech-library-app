<template>
  <div class="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl shadow-lg mt-6">
    <h2 class="text-3xl font-bold mb-6 text-gray-800 flex items-center gap-2">
      📚 Library Books
    </h2>

    <ul v-if="sortedBooks.length" class="grid sm:grid-cols-2 lg:grid-cols-6 gap-4">
      <li 
        v-for="book in sortedBooks" 
        :key="book.id" 
        class="bg-transparent border border-gray-200 rounded-lg shadow-sm hover:shadow-lg p-4 transition-all duration-300"
      >
        <div class="flex flex-col h-full justify-between">
          <div>
            <h3 
              @click="$emit('selectBook', book)" 
              class="text-xl font-semibold text-blue-700 hover:text-blue-900 cursor-pointer mb-1"
            >
              {{ book.name }}
            </h3>
            <p class="text-gray-600 text-sm">✍️ <strong>Author:</strong> {{ book.author }}</p>
            <p class="text-gray-600 text-sm">📅 <strong>Year:</strong> {{ book.year }}</p>
          </div>

   
          <div class="flex justify-end mt-4">
            <button 
              @click="$emit('editBook', book)" 
              class="text-sm bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-md font-medium transition"
            >
              ✏️ Edit
            </button>
          </div>
        </div>
      </li>
    </ul>


    <p v-else class="text-gray-500 italic text-center py-6">
      No books available. Add your first one above 📖
    </p>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({ books: Array })

const sortedBooks = computed(() => [...props.books].sort((a, b) => a.name.localeCompare(b.name)))
</script>
