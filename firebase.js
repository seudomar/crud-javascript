
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
  import { } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js"
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyD5ownHdLPJrvoOqWlog9yDRnE1GA1o-ds",
    authDomain: "javascript-crud-26f29.firebaseapp.com",
    projectId: "javascript-crud-26f29",
    storageBucket: "javascript-crud-26f29.appspot.com",
    messagingSenderId: "792956398749",
    appId: "1:792956398749:web:d8326b962ac138fc4b3874"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  export const saveTask = (title, description) => {
    console.log(title, description)
  }
