<template>
  <form @submit.prevent="handleSubmit" class="bg-transparent p-6 rounded-lg shadow-md space-y-4">

    <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-white font-bold">
      <input 
        v-model="name" 
        type="text" 
        placeholder="Book Name" 
        required
        class="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <input 
        v-model="author" 
        type="text" 
        placeholder="Author" 
        required
        class="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <input 
        v-model="year" 
        type="number" 
        placeholder="Year" 
        required
        class="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>


    <div class="text-center">
      <button 
        type="submit" 
        class="w-full md:w-auto bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition font-semibold"
      >
        {{ editingBook ? 'Update Book' : 'Add Book' }}
      </button>
    </div>
  </form>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  editingBook: Object
})


const emit = defineEmits(['addBook', 'updateBook', 'clearEdit'])

const name = ref('')
const author = ref('')
const year = ref('')

watch(() => props.editingBook, (book) => {
  if (book) {
    name.value = book.name
    author.value = book.author
    year.value = book.year
  } else {
    name.value = ''
    author.value = ''
    year.value = ''
  }
})

function handleSubmit() {
  const book = {
    name: name.value,
    author: author.value,
    year: Number(year.value)
  }

  if (props.editingBook) {
    emit('updateBook', book) 
    emit('clearEdit')         
  } else {
    emit('addBook', book)    
  }


  name.value = ''
  author.value = ''
  year.value = ''
}
</script>
