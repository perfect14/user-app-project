import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDphJ8NZPjdlAu1HGuZakz8oYsu6UqczSE",
    authDomain: "user-app-e3cfe.firebaseapp.com",
    databaseURL: "https://user-app-e3cfe.firebaseio.com",
    projectId: "user-app-e3cfe",
    storageBucket: "user-app-e3cfe.appspot.com",
    messagingSenderId: "907176605019",
    appId: "1:907176605019:web:b2da1b26e00beaf7c2167e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;