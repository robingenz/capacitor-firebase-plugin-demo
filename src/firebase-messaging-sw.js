importScripts(
  "https://www.gstatic.com/firebasejs/9.7.0/firebase-app-compat.js",
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.7.0/firebase-messaging-compat.js",
);

firebase.initializeApp({
  apiKey: "AIzaSyAdSJa6qYSkHVQIkPGkl0OtDu8w2JbTwe8",
  authDomain: "capacitor-firebase-plugin-demo.firebaseapp.com",
  projectId: "capacitor-firebase-plugin-demo",
  storageBucket: "capacitor-firebase-plugin-demo.appspot.com",
  messagingSenderId: "20043654228",
  appId: "1:20043654228:web:98b28eaef48dad770939c1",
  measurementId: "G-K2DPKN6HD5",
});
const messaging = firebase.messaging();
