import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './main.css'
import { ChakraProvider } from '@chakra-ui/react'


// npm install firebase
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClITkN63gpAZlp8-W_zyhP8zf8Np6Zf4o",
  authDomain: "comision-react-55750.firebaseapp.com",
  projectId: "comision-react-55750",
  storageBucket: "comision-react-55750.appspot.com",
  messagingSenderId: "412689482145",
  appId: "1:412689482145:web:79c9c495b6bb65e67acbe0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(
    <ChakraProvider>
      <App />
    </ChakraProvider>,
)
