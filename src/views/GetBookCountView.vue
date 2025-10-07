<template>
  <div id="app">
    <h1>Book Counter</h1>
    <button @click="getBookCount">Get Book Count</button>
    <p v-if="count !== null">Total number of Books: {{ count }}</p>
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
        console.log('Fetching book count from Firebase function...')
        const response = await axios.get('https://countbooks-bixa3mmbqq-uc.a.run.app')
        console.log('Response:', response.data)
        this.count = response.data.count
        this.error = null
      } catch (error) {
        console.error('Error fetching book count:', error)
        this.error = 'Error fetching book count: ' + error.message
        this.count = null
      }
    }
  }
}
</script>
