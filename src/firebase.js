import firebase from 'firebase';

const firebaseConfig =
{
    apiKey: "AIzaSyAvN2m8JqFjTVf1nxJdAOM9rwrfGMiVqZE",
    authDomain: "slack-major.firebaseapp.com",
    databaseURL: "https://slack-major.firebaseio.com",
    projectId: "slack-major",
    storageBucket: "slack-major.appspot.com",
    messagingSenderId: "887199674276",
    appId: "1:887199674276:web:4f6c4420ed4b1f3621db31"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;
