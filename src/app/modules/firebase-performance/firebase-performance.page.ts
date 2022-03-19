import { Component } from '@angular/core';
import { FirebaseAnalytics } from '@capacitor-firebase/analytics';
import { FirebasePerformance } from '@capacitor-firebase/performance';

@Component({
  selector: 'app-firebase-performance',
  templateUrl: './firebase-performance.page.html',
  styleUrls: ['./firebase-performance.page.scss'],
})
export class FirebasePerformancePage {
  private readonly githubUrl =
    'https://github.com/robingenz/capacitor-firebase';

  constructor() {}

  ionViewDidEnter() {
    FirebaseAnalytics.setCurrentScreen({
      screenName: 'FirebasePerformancePage',
    });
  }

  public openOnGithub(): void {
    window.open(this.githubUrl, '_blank');
  }

  public async startTrace(): Promise<void> {
    await FirebasePerformance.startTrace({ traceName: 'test_trace' });
  }

  public async stopTrace(): Promise<void> {
    await FirebasePerformance.stopTrace({ traceName: 'test_trace' });
  }

  public async incrementMetric(): Promise<void> {
    await FirebasePerformance.incrementMetric({
      traceName: 'test_trace',
      metricName: 'item_cache_hit',
      incrementBy: 1,
    });
  }
}
