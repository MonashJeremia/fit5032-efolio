// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
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
const db = getFirestore()
export default db
