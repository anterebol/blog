import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDwt-lz3eRZfkF3cbluNJsJhXS3bjiu1NI',
  authDomain: 'blog-15be1.firebaseapp.com',
  projectId: 'blog-15be1',
  storageBucket: 'blog-15be1.appspot.com',
  messagingSenderId: '803098578413',
  appId: '1:803098578413:web:73be42e1842d54f417abe4',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
