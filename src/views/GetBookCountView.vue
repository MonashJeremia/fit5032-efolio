<template>
  <div id="app">
    <h1>Book Counter</h1>
    <button @click="getBookCount">Get Book Count</button>
    <p v-if="bookCount !== null">Total number of Books: {{ count }}</p>
    <p v-if="error">{{ error }}</p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      count: null,
      error: null
    }
  },
  methods: {
    async getBookCount() {
      try {
        const response = await axios.get('http://localhost:3000/api/bookcount')
        this.bookCount = response.data.count
        this.error = null
      } catch (error) {
        this.error('Error fetching book count:', error)
        this.error = error
        this.count = null
      }
    }
  }
}
</script>
