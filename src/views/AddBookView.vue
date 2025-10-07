<template>
  <div>
    <h1>Add Book</h1>
    <form @submit.prevent="addBook">
      <div>
        <label for="isbn">ISBN:</label>
        <input type="text" id="isbn" v-model="isbn" required />
      </div>
      <div>
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="name" required />
      </div>
      <button type="submit">Add Book</button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue'
import { db } from '../firebase.js'
import { collection, addDoc } from 'firebase/firestore'

export default {
  setup() {
    const isbn = ref('')
    const name = ref('')

    const addBook = async () => {
      try {
        console.log('Starting to add book...')
        const isbnNumber = Number(isbn.value)
        if (isNaN(isbnNumber)) {
          alert('ISBN must be a valid number.')
          return
        }

        console.log('Adding book to Firestore:', { isbn: isbnNumber, name: name.value })
        const docRef = await addDoc(collection(db, 'books'), {
          isbn: isbnNumber,
          name: name.value
        })
        console.log('Book added with ID: ', docRef.id)

        isbn.value = ''
        name.value = ''
        alert('Book added successfully!')
      } catch (error) {
        console.error('Error adding book: ', error)
        alert('Error adding book: ' + error.message)
      }
    }

    return {
      isbn,
      name,
      addBook
    }
  }
}
</script>
