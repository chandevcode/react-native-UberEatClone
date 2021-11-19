import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCN9I8s42T-1GaQjW17xe_s9FqqxiA3_Gc",
    authDomain: "ubereat-8f252.firebaseapp.com",
    projectId: "ubereat-8f252",
    storageBucket: "ubereat-8f252.appspot.com",
    messagingSenderId: "412228913361",
    appId: "1:412228913361:web:4ed2417faf908721769df0"
  };

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()

export default firebase;