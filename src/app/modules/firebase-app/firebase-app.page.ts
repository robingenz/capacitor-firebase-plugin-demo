import { Component, OnInit } from '@angular/core';
import { FirebaseAnalytics } from '@capacitor-firebase/analytics';
import { Platform } from '@ionic/angular';
import { FirebaseApp } from '@capacitor-firebase/app';

@Component({
  selector: 'app-firebase-app',
  templateUrl: './firebase-app.page.html',
  styleUrls: ['./firebase-app.page.scss'],
})
export class FirebaseAppPage implements OnInit {
  public name = '';
  public apiKey = '';
  public applicationId = '';
  public databaseUrl = '';
  public gcmSenderId = '';
  public projectId = '';
  public storageBucket = '';

  private readonly githubUrl =
    'https://github.com/robingenz/capacitor-firebase';

  constructor(private readonly platform: Platform) {}

  public ngOnInit(): void {
    if (!this.platform.is('capacitor')) {
      return;
    }
    FirebaseApp.getName().then((result) => {
      this.name = result.name;
    });
    FirebaseApp.getOptions().then((result) => {
      this.apiKey = result.apiKey;
      this.applicationId = result.applicationId;
      this.databaseUrl = result.databaseUrl;
      this.gcmSenderId = result.gcmSenderId;
      this.projectId = result.projectId;
      this.storageBucket = result.storageBucket;
    });
  }

  ionViewDidEnter() {
    FirebaseAnalytics.setCurrentScreen({
      screenName: 'FirebaseAppPage'
    });
  }

  public openOnGithub(): void {
    window.open(this.githubUrl, '_blank');
  }
}
