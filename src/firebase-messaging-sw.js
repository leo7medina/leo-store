// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/8.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.8.1/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
  apiKey: 'AIzaSyBVyROrirScdB8DGBQ_Zg0-rEKNyJm98Qw',
  authDomain: 'leo-store.firebaseapp.com',
  databaseURL: 'https://leo-store.firebaseio.com',
  projectId: 'leo-store',
  storageBucket: 'leo-store.appspot.com',
  messagingSenderId: '974727708523',
  appId: '1:974727708523:web:a11254c62f1ed6a147962e',
  measurementId: 'G-S9PPRD432E',
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

//import { getAnalytics } from "firebase/analytics";
//const analytics = getAnalytics(app);
