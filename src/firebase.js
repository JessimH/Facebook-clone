import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyBiVgMC4DDKwWCJFhclI58HR018jZm3ZHc",
    authDomain: "facebook-clone-a5cf4.firebaseapp.com",
    projectId: "facebook-clone-a5cf4",
    storageBucket: "facebook-clone-a5cf4.appspot.com",
    messagingSenderId: "214225450482",
    appId: "1:214225450482:web:f3b067a931800fb102276b",
    measurementId: "G-5JPQCPXLHH"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db
