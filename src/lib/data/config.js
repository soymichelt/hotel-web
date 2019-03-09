import firebase from 'firebase/app'

var config = {
    apiKey: "AIzaSyA6UEdqwQb-HXAjxkehl16vk5zgor-Su-c",
    authDomain: "web-hotel-chatbot.firebaseapp.com",
    databaseURL: "https://web-hotel-chatbot.firebaseio.com",
    projectId: "web-hotel-chatbot",
    storageBucket: "web-hotel-chatbot.appspot.com",
    messagingSenderId: "588796666174"
}

export const FirebaseInitialize = () => {
    firebase.initializeApp(config)
}