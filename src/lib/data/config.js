import firebase from 'firebase/app'

var config = {
    apiKey: "AIzaSyA5sDMPGv-zpr0p_HuKDWRcJka6Epgrxl8",
    authDomain: "carnet-app.firebaseapp.com",
    databaseURL: "https://carnet-app.firebaseio.com",
    projectId: "carnet-app",
    storageBucket: "carnet-app.appspot.com",
    messagingSenderId: "786274656627"
}

export const FirebaseInitialize = () => {
    firebase.initializeApp(config)
}