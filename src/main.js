import 'bootstrap/dist/css/bootstrap.min.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'

const app = createApp(App)
app.use(PrimeVue, { theme: { preset: Aura } })
app.use(router)

app.mount('#app')

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth, connectAuthEmulator } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDuzUYbLooj2HJqhnriK-WOIiFSHJawbZU',
  authDomain: 'fit5032-week6-12aca.firebaseapp.com',
  projectId: 'fit5032-week6-12aca',
  storageBucket: 'fit5032-week6-12aca.firebasestorage.app',
  messagingSenderId: '840951311961',
  appId: '1:840951311961:web:fda5fc52662989f92bcb48'
}

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)

// Connect to emulator in development
if (location.hostname === 'localhost') {
  const auth = getAuth(firebaseApp)
  connectAuthEmulator(auth, 'http://localhost:9099')
}
