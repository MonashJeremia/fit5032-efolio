<template>
  <div>
    <h1>Count Book API</h1>
    <div v-if="error" style="color: red">
      <h3>Error:</h3>
      <p>{{ error }}</p>
    </div>
    <div v-else-if="jsondata">
      <h3>API Response:</h3>
      <pre>{{ JSON.stringify(jsondata, null, 2) }}</pre>
    </div>
    <div v-else>
      <p>Loading...</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      jsondata: null,
      error: null
    }
  },
  mounted() {
    this.getBookCountAPI()
  },
  methods: {
    async getBookCountAPI() {
      try {
        console.log('Fetching book count from Firebase function...')
        const response = await axios.get('https://countbooks-bixa3mmbqq-uc.a.run.app/')
        console.log('Response:', response.data)
        this.jsondata = response.data
        this.error = null
      } catch (error) {
        console.error('Error fetching book count:', error)
        this.error = 'Error fetching book count: ' + error.message
        this.jsondata = { error: error.message }
      }
    }
  }
}
</script>
