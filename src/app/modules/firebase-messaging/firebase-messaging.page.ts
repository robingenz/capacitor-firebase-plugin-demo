import { Component, NgZone } from '@angular/core';
import {
  FirebaseMessaging,
  GetTokenOptions,
} from '@capacitor-firebase/messaging';
import { Capacitor } from '@capacitor/core';
import { environment } from '@env/environment';
import { Platform } from '@ionic/angular';

const LOGTAG = '[FirebaseMessagingPage]';

@Component({
  selector: 'app-firebase-messaging',
  templateUrl: './firebase-messaging.page.html',
  styleUrls: ['./firebase-messaging.page.scss'],
})
export class FirebaseMessagingPage {
  public token = '';

  private readonly githubUrl =
    'https://github.com/robingenz/capacitor-firebase';

  constructor(private readonly ngZone: NgZone) {
    FirebaseMessaging.removeAllListeners().then(() => {
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
    });
    if (!Capacitor.isNativePlatform()) {
      navigator.serviceWorker.addEventListener('message', (event: any) => {
        console.log(`${LOGTAG} serviceWorker message`, { event });
      });
    }
  }

  public openOnGithub(): void {
    window.open(this.githubUrl, '_blank');
  }

  public async requestPermissions(): Promise<void> {
    await FirebaseMessaging.requestPermissions();
  }

  public async getToken(): Promise<void> {
    const options: GetTokenOptions = {
      vapidKey: environment.firebase.vapidKey,
    };
    const { token } = await FirebaseMessaging.getToken(options);
    this.token = token;
    console.log(token);
  }

  public async deleteToken(): Promise<void> {
    await FirebaseMessaging.deleteToken();
    this.token = '';
  }
}
