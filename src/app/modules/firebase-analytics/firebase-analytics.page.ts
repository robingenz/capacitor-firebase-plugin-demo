import { Component, OnInit } from '@angular/core';
import { FirebaseAnalytics } from '@capacitor-firebase/analytics';

@Component({
  selector: 'app-firebase-analytics',
  templateUrl: './firebase-analytics.page.html',
  styleUrls: ['./firebase-analytics.page.scss'],
})
export class FirebaseAnalyticsPage implements OnInit {
  public appInstanceId = '';

  private readonly githubUrl =
    'https://github.com/robingenz/capacitor-firebase';

  constructor() {}

  public ngOnInit(): void {
    FirebaseAnalytics.getAppInstanceId().then((result) => {
      this.appInstanceId = result.appInstanceId || '';
    });
  }

  public ionViewDidEnter(): void {
    FirebaseAnalytics.setCurrentScreen({
      screenName: 'FirebaseAnalyticsPage',
    });
  }

  public openOnGithub(): void {
    window.open(this.githubUrl, '_blank');
  }

  public async enable(): Promise<void> {
    await FirebaseAnalytics.setEnabled({ enabled: true });
  }

  public async disable(): Promise<void> {
    await FirebaseAnalytics.setEnabled({ enabled: true });
  }
}
