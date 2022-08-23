// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore} from 'firebase/firestore/lite';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBGK5sUmS0OIekKrFP53W7DXJ-XSRcTPeo',
  authDomain: 'todo-list-55d6f.firebaseapp.com',
  projectId: 'todo-list-55d6f',
  storageBucket: 'todo-list-55d6f.appspot.com',
  messagingSenderId: '470462095478',
  appId: '1:470462095478:web:31555bddbec27c7e92ff57',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


