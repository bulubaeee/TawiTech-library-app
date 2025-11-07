<template>
  <div 
    class="relative min-h-screen bg-cover bg-center flex flex-col items-center justify-center text-center"
    style="background-image: url('../src/assets/image.webp')"
  >
    <div class="absolute inset-0 bg-black/40 backdrop-blur-[5px]"></div>

    <div class="relative z-10 bg-white/20 border border-white/30 backdrop-blur-xl rounded-3xl shadow-2xl p-10 max-w-5xl w-[90%]">
      <h1 class="text-7xl md:text-8xl text-white font-bold mb-8 drop-shadow-lg">
        Library App
      </h1>

      <BookForm 
        :editingBook="editingBook"
        @addBook="addBook"
        @updateBook="updateBook"
        @clearEdit="clearEdit"
      />

      <BookList 
        :books="books" 
        @selectBook="selectBook"
        @editBook="editBook"
      />

      <BookDetails v-if="selectedBook" :book="selectedBook"/>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import BookForm from './components/BookForm.vue'
import BookList from './components/BookList.vue'
import BookDetails from './components/BookDetails.vue'

import { db, collection, getDocs, addDoc, updateDoc, doc } from './firebase'

const books = ref([])         
const selectedBook = ref(null) 
const editingBook = ref(null) 

const booksCollection = collection(db, 'books')


async function fetchBooks() {
  const snapshot = await getDocs(booksCollection)
  books.value = snapshot.docs.map(d => ({ id: d.id, ...d.data() }))
}


onMounted(fetchBooks)


async function addBook(book) {
  await addDoc(booksCollection, book)
  await fetchBooks()
}

async function updateBook(book) {
  const bookRef = doc(db, 'books', editingBook.value.id)
  await updateDoc(bookRef, book)
  editingBook.value = null
  await fetchBooks()
}


function selectBook(book) {
  selectedBook.value = book
}

function editBook(book) {
  editingBook.value = book
}

function clearEdit() {
  editingBook.value = null
}
</script>
