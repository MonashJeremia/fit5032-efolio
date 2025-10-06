// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
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
initializeApp(firebaseConfig)
const db = getFirestore()
export default db
