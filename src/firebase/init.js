import firebase from 'firebase'
//import firestore from 'firebase/firestore';

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBALMhTVyAefjh4JU36r2X2qQbCrfaBjkA",
    authDomain: "appsoccer-7d899.firebaseapp.com",
    projectId: "appsoccer-7d899",
    storageBucket: "appsoccer-7d899.appspot.com",
    messagingSenderId: "904612287412",
    appId: "1:904612287412:web:56cb6cd136cb104fb7d8e1"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  firebaseApp.firestore().settings({ timestampsInSnapshots: true });

  export default firebaseApp.firestore();

  // Initialize Firebase
  //firebase.initializeApp(firebaseConfig);
