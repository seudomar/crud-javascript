
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
  import { getFirestore, collection, addDoc, getDocs,
    deleteDoc, doc, onSnapshot, getDoc, updateDoc } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js"
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

  //Aqui nos conectamos con la base de dato
  const db = getFirestore()

  export const saveTask = (title, description) => {
    //console.log(title, description)

    addDoc(collection(db, 'tasks'), {title, description})

  }

  export const getTasks = () => getDocs(collection(db, 'tasks'))
  export const getTask = id => getDoc(doc(db,"tasks", id))

  export const onGetTask = (callback) => onSnapshot(collection(db, 'tasks'), callback)
  export const deleteTask = id => deleteDoc(doc(db, "tasks", id))
  export const updateTask = (id, newFields) => updateDoc(doc(db, 'tasks', id), newFields);