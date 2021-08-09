import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import 'dotenv';
import './index.css';
import App from "./App";



firebase.initializeApp({
  apiKey: process.env.FIREBASE_APIKEY,
  authDomain: process.env.FIREBASE_AUTHDOMAIN,
  projectId: process.env.FIREBASE_PROJECTID,
  storageBucket: process.env.FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGINGSENDERID,
  appId: process.env.FIREBASE_APPID,
  measurementId: process.env.FIREBASE_MEASUREMENTID
}).analytics();

function Index() {
  const element = (
    <React.StrictMode>
      <div >
          <App/>
      </div>
  </React.StrictMode>
  );
  ReactDOM.render(element, document.getElementById('root'));
}
setInterval(Index, 10000);
