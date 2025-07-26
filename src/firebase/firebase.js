import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAnalytics } from 'firebase/analytics'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyBSvvXEwMcHmO_2gJLftJOHT-PBwFyM6yI',
  authDomain: 'typingpractice-a4f94.firebaseapp.com',
  projectId: 'typingpractice-a4f94',
  storageBucket: 'typingpractice-a4f94.firebasestorage.app',
  messagingSenderId: '128893083730',
  appId: '1:128893083730:web:8c848610ed2142f15aff8b',
  measurementId: 'G-E6JR5FZHLZ',
}

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
export const auth = getAuth(app)
