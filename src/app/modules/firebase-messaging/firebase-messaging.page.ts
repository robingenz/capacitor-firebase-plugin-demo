import { Component, NgZone, OnInit } from '@angular/core';
import { FirebaseMessaging } from '@capacitor-firebase/messaging';
import { environment } from '@env/environment';
import { getMessaging, onMessage } from 'firebase/messaging';

const LOGTAG = '[FirebaseMessagingPage]';

@Component({
  selector: 'app-firebase-messaging',
  templateUrl: './firebase-messaging.page.html',
  styleUrls: ['./firebase-messaging.page.scss'],
})
export class FirebaseMessagingPage implements OnInit {
  public token = '';

  private readonly githubUrl =
    'https://github.com/robingenz/capacitor-firebase';

  constructor(private readonly ngZone: NgZone) {}

  public ngOnInit(): void {
    FirebaseMessaging.addListener('tokenReceived', (event) => {
      console.log(`${LOGTAG} tokenReceived`, { event });
      this.ngZone.run(() => {
        this.token = event.token;
      });
    });
    FirebaseMessaging.addListener('notificationReceived', (event) => {
      console.log(`${LOGTAG} notificationReceived`, { event });
    });
    FirebaseMessaging.addListener('notificationActionPerformed', (event) => {
      console.log(`${LOGTAG} notificationActionPerformed`, { event });
    });
    const messaging = getMessaging();
    onMessage(messaging, (payload) => console.log(payload));
  }

  public openOnGithub(): void {
    window.open(this.githubUrl, '_blank');
  }

  public async requestPermissions(): Promise<void> {
    await FirebaseMessaging.requestPermissions();
  }

  public async getToken(): Promise<void> {
    const serviceWorkerRegistration = await navigator.serviceWorker.register(
      'firebase-messaging-sw.js',
      { type: 'module' }
    );
    const { token } = await FirebaseMessaging.getToken({
      vapidKey: environment.firebase.vapidKey,
      serviceWorkerRegistration,
    });
    this.token = token;
  }

  public async deleteToken(): Promise<void> {
    await FirebaseMessaging.deleteToken();
    this.token = '';
  }
}
