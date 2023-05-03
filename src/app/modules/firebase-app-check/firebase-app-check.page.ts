import { Component } from '@angular/core';
import { FirebaseAnalytics } from '@capacitor-firebase/analytics';
import {
  FirebaseAppCheck,
  GetTokenOptions,
  InitializeOptions,
} from '@capacitor-firebase/app-check';

@Component({
  selector: 'app-firebase-app-check',
  templateUrl: './firebase-app-check.page.html',
  styleUrls: ['./firebase-app-check.page.scss'],
})
export class FirebaseAppCheckPage {
  public useDebugProvider = false;
  public token = '';

  private readonly githubUrl =
    'https://github.com/robingenz/capacitor-firebase';

  constructor() {}

  public ionViewDidEnter() {
    FirebaseAnalytics.setCurrentScreen({
      screenName: 'FirebaseAppPage',
    });
  }

  public openOnGithub(): void {
    window.open(this.githubUrl, '_blank');
  }

  public async initialize(): Promise<void> {
    const options: InitializeOptions = {
      debug: this.useDebugProvider,
    };
    await FirebaseAppCheck.initialize(options);
  }

  public async getToken(): Promise<void> {
    const options: GetTokenOptions = {
      forceRefresh: true,
    };
    const { token } = await FirebaseAppCheck.getToken(options);
    this.token = token;
  }
}
