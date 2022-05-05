import { initializeApp } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js";
import { onBackgroundMessage } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-messaging-sw.js";
import {
  getMessaging,
  isSupported,
} from "https://www.gstatic.com/firebasejs/9.7.0/firebase-messaging.js";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyAdSJa6qYSkHVQIkPGkl0OtDu8w2JbTwe8",
  authDomain: "capacitor-firebase-plugin-demo.firebaseapp.com",
  projectId: "capacitor-firebase-plugin-demo",
  storageBucket: "capacitor-firebase-plugin-demo.appspot.com",
  messagingSenderId: "20043654228",
  appId: "1:20043654228:web:98b28eaef48dad770939c1",
  measurementId: "G-K2DPKN6HD5",
});

isSupported().then((isSupported) => {
  console.log({ isSupported });
  if (isSupported) {
    const messaging = getMessaging(firebaseApp);

    onBackgroundMessage(
      messaging,
      ({ notification: { title, body, image } }) => {
        console.log("onBackgroundMessage", { notification });
        self.registration.showNotification(title, {
          body,
          icon: image || "/assets/icon/favicon.png",
        });
      }
    );
  }
});
