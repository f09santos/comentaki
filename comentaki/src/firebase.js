//import firebase from 'firebase/app'
import 'firebase/database'


import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
  


 const firebaseConfig = {
    apiKey: "AIzaSyBo-Hiub30-OgpcyzlTjVrkc1nUu0wi-h0",
    authDomain: "comentaki-f09.firebaseapp.com",
    projectId: "comentaki-f09",
    storageBucket: "comentaki-f09.appspot.com",
    messagingSenderId: "701898633893",
    appId: "1:701898633893:web:8e0b4ab0a59cc72d47534c"
  }
  firebase.initializeApp(firebaseConfig)

  export default firebase
  
