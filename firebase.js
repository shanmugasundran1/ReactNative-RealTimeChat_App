import firebase from 'firebase'
import { initializeApp } from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCBomQtYy4oXdtxKgdBRz3ElAR8zITLbZc',
  authDomain: 'signal-50510.firebaseapp.com',
  projectId: 'signal-50510',
  storageBucket: 'signal-50510.appspot.com',
  messagingSenderId: '1075918946004',
  appId: '1:1075918946004:web:cefd30475988bce6024541',
}

let app

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig)
} else {
  app = firebase.app()
}

const db = app.firestore()
const auth = firebase.auth()

export { db, auth }
