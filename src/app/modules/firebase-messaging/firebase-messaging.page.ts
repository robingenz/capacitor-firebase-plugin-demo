import { Component, NgZone } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import {
  Channel,
  FirebaseMessaging,
  GetTokenOptions,
  Importance,
  Notification,
  Visibility,
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
  public readonly importance = Importance;
  public readonly visibility = Visibility;

  public token = '';
  public deliveredNotifications: Notification[] = [];
  public channels: Channel[] = [];
  public createChannelFormGroup = new UntypedFormGroup({
    description: new UntypedFormControl(''),
    id: new UntypedFormControl(''),
    importance: new UntypedFormControl(Importance.Default),
    lightColor: new UntypedFormControl(''),
    lights: new UntypedFormControl(false),
    name: new UntypedFormControl(''),
    sound: new UntypedFormControl(''),
    vibration: new UntypedFormControl(false),
    visibility: new UntypedFormControl(Visibility.Private),
  });

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
    console.log(token);
    this.token = token;
  }

  public async deleteToken(): Promise<void> {
    await FirebaseMessaging.deleteToken();
    this.token = '';
  }

  public async createChannel(): Promise<void> {
    const description =
      this.createChannelFormGroup.get('description')?.value || '';
    const id = this.createChannelFormGroup.get('id')?.value || '';
    const importance =
      this.createChannelFormGroup.get('importance')?.value ||
      Importance.Default;
    const lightColor =
      this.createChannelFormGroup.get('lightColor')?.value || '';
    const lights = this.createChannelFormGroup.get('lights')?.value || false;
    const name = this.createChannelFormGroup.get('name')?.value || '';
    const sound = this.createChannelFormGroup.get('sound')?.value || '';
    const vibration =
      this.createChannelFormGroup.get('vibration')?.value || false;
    const visibility =
      this.createChannelFormGroup.get('visibility')?.value ||
      Visibility.Private;

    await FirebaseMessaging.createChannel({
      description,
      id,
      importance,
      lightColor,
      lights,
      name,
      sound,
      vibration,
      visibility,
    });
    await this.listChannels();
  }

  public async deleteChannel(channel: Channel): Promise<void> {
    await FirebaseMessaging.deleteChannel({
      id: channel.id,
    });
    await this.listChannels();
  }

  public async listChannels(): Promise<void> {
    const { channels } = await FirebaseMessaging.listChannels();
    this.channels = channels;
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
