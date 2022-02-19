import { initializeApp } from "firebase/app";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOLm31cSxoeLf7xWGKGeIFS8b0EZ51tlc",
  authDomain: "screen-butler.firebaseapp.com",
  projectId: "screen-butler",
  storageBucket: "screen-butler.appspot.com",
  messagingSenderId: "856116268976",
  appId: "1:856116268976:web:1380b431e02dd2e7c95075"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);


export default firebase;