import { Component, NgZone, OnInit } from '@angular/core';
import { FirebaseMessaging } from '@capacitor-firebase/messaging';
import { environment } from '@env/environment';

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
  }

  public ngOnInit(): void {
    FirebaseMessaging.getToken({
      vapidKey: environment.firebase.vapidKey,
    }).then((result) => {
      this.token = result.token;
    });
  }

  public openOnGithub(): void {
    window.open(this.githubUrl, '_blank');
  }

  public async requestPermissions(): Promise<void> {}

  public async getToken(): Promise<void> {}

  public async deleteToken(): Promise<void> {}
}
