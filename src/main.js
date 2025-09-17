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
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDiUHRIpQ-nZL_jFwj88vPTlY5h2cMtR4k',
  authDomain: 'week7-jeremia.firebaseapp.com',
  projectId: 'week7-jeremia',
  storageBucket: 'week7-jeremia.firebasestorage.app',
  messagingSenderId: '392435116850',
  appId: '1:392435116850:web:00dece6890f6567697052b'
}

// Initialize Firebase
initializeApp(firebaseConfig)
