import { Component } from '@angular/core';
import { FirebaseCrashlytics } from '@capacitor-firebase/crashlytics';
import { FirebaseAnalytics } from '@capacitor-firebase/analytics';

@Component({
  selector: 'app-firebase-crashlytics',
  templateUrl: './firebase-crashlytics.page.html',
  styleUrls: ['./firebase-crashlytics.page.scss'],
})
export class FirebaseCrashlyticsPage {
  private readonly githubUrl =
    'https://github.com/robingenz/capacitor-firebase';

  constructor() {}

  ionViewDidEnter() {
    FirebaseAnalytics.setCurrentScreen({
      screenName: 'FirebaseCrashlyticsPage'
    });
  }

  public openOnGithub(): void {
    window.open(this.githubUrl, '_blank');
  }

  public async crash(): Promise<void> {
    await FirebaseAnalytics.logEvent({
      name: 'crash_triggered'
    });
    await FirebaseCrashlytics.crash({ message: 'Test' });
  }
}
