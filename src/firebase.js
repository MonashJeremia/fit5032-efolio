// Firebase configuration and initialization
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

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
const app = initializeApp(firebaseConfig)

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app)
export default app