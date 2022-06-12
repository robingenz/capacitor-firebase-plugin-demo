import { Component, NgZone } from '@angular/core';
import {
  FirebaseMessaging,
  GetTokenOptions,
  Notification,
} from '@capacitor-firebase/messaging';
import { Capacitor } from '@capacitor/core';
import { environment } from '@env/environment';

const LOGTAG = '[FirebaseMessagingPage]';

@Component({
  selector: 'app-firebase-messaging',
  templateUrl: './firebase-messaging.page.html',
  styleUrls: ['./firebase-messaging.page.scss'],
})
export class FirebaseMessagingPage {
  public token = '';
  public deliveredNotifications: Notification[] = [];

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
  }

  public async deleteToken(): Promise<void> {
    await FirebaseMessaging.deleteToken();
    this.token = '';
  }

  public async getDeliveredNotifications(): Promise<void> {
    const result = await FirebaseMessaging.getDeliveredNotifications();
    this.deliveredNotifications = result.notifications;
  }

  public async removeAllDeliveredNotifications(): Promise<void> {
    await FirebaseMessaging.removeAllDeliveredNotifications();
    await this.getDeliveredNotifications();
  }

  public async removeDeliveredNotifications(
    notification: Notification
  ): Promise<void> {
    await FirebaseMessaging.removeDeliveredNotifications({
      notifications: [notification],
    });
    await this.getDeliveredNotifications();
  }
}
