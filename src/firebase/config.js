import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyA0wf7MG5KaORHThsipgy6Kv1M18rojRTE",
    authDomain: "cookpal-7029c.firebaseapp.com",
    projectId: "cookpal-7029c",
    storageBucket: "cookpal-7029c.appspot.com",
    messagingSenderId: "508291044492",
    appId: "1:508291044492:web:249692b6d0d1ac3ecc17a9"
  };

//   init firebase
  firebase.initializeApp(firebaseConfig)

//   init service
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

export {projectFirestore,projectAuth}

