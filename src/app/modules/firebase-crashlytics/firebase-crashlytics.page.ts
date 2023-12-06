import { Component } from '@angular/core';
import { FirebaseAnalytics } from '@capacitor-firebase/analytics';
import { FirebaseCrashlytics } from '@capacitor-firebase/crashlytics';

@Component({
  selector: 'app-firebase-crashlytics',
  templateUrl: './firebase-crashlytics.page.html',
  styleUrls: ['./firebase-crashlytics.page.scss'],
})
export class FirebaseCrashlyticsPage {
  public enabled: boolean | undefined;

  private readonly githubUrl =
    'https://github.com/robingenz/capacitor-firebase';

  constructor() {}

  ionViewDidEnter() {
    FirebaseAnalytics.setCurrentScreen({
      screenName: 'FirebaseCrashlyticsPage',
    });
  }

  public openOnGithub(): void {
    window.open(this.githubUrl, '_blank');
  }

  public async enable(): Promise<void> {
    await FirebaseCrashlytics.setEnabled({ enabled: true });
  }

  public async disable(): Promise<void> {
    await FirebaseCrashlytics.setEnabled({ enabled: false });
  }

  public async isEnabled(): Promise<void> {
    const result = await FirebaseCrashlytics.isEnabled();
    this.enabled = result.enabled;
  }

  public async crash(): Promise<void> {
    await FirebaseAnalytics.logEvent({
      name: 'crash_triggered',
    });
    await FirebaseCrashlytics.crash({ message: 'Test' });
  }
}
