import { Component } from '@angular/core';
import { FirebaseAnalytics } from '@capacitor-firebase/analytics';
import { FirebaseFirestore } from '@capacitor-firebase/firestore';
import { Capacitor } from '@capacitor/core';

@Component({
  selector: 'app-firebase-firestore',
  templateUrl: './firebase-firestore.page.html',
  styleUrls: ['./firebase-firestore.page.scss'],
})
export class FirebaseFirestorePage {
  private readonly githubUrl =
    'https://github.com/robingenz/capacitor-firebase';

  constructor() {}

  ionViewDidEnter() {
    FirebaseAnalytics.setCurrentScreen({
      screenName: 'FirebaseFirestorePage',
    });
  }

  public openOnGithub(): void {
    window.open(this.githubUrl, '_blank');
  }

  public async setDocument(): Promise<void> {
    await FirebaseFirestore.setDocument({
      reference: `samples/${Capacitor.getPlatform()}`,
      data: {
        array: [
          this.getRandomInt(100),
          this.getRandomInt(100),
          this.getRandomInt(100),
        ],
        boolean: Math.random() > 0.5,
        date: new Date(),
        float: Math.random(),
        integer: this.getRandomInt(100),
        map: {
          key: 'value',
        },
        // nan: NaN, // Not supported (see https://github.com/capawesome-team/capacitor-firebase/issues/556)
        null: null,
        reference: `samples/${
          Capacitor.getPlatform() === 'ios' ? 'android' : 'ios'
        }`,
        string: 'Hello, Capacitor!',
      },
    });
  }

  public async getDocument(): Promise<void> {
    const result = await FirebaseFirestore.getDocument({
      reference: `samples/${Capacitor.getPlatform()}`,
    });
    console.log({ result });
  }

  private getRandomInt(max: number): number {
    return Math.floor(Math.random() * max);
  }
}
