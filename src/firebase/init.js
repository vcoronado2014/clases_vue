import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyBALMhTVyAefjh4JU36r2X2qQbCrfaBjkA",
    authDomain: "appsoccer-7d899.firebaseapp.com",
    databaseURL: "https://appsoccer-7d899-default-rtdb.firebaseio.com",
    projectId: "appsoccer-7d899",
    storageBucket: "appsoccer-7d899.appspot.com",
    messagingSenderId: "904612287412",
    appId: "1:904612287412:web:56cb6cd136cb104fb7d8e1"
  };
const firebaseApp = firebase.initializeApp(firebaseConfig);
//de esto no se preocupen todavia hasta mañana
firebaseApp.firestore().settings({ timestampsInSnapshots: true });
export default firebaseApp.firestore();
