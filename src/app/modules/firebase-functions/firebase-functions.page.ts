import { Component } from '@angular/core';
import { FirebaseAnalytics } from '@capacitor-firebase/analytics';
import { FirebaseFunctions } from '@capacitor-firebase/functions';

@Component({
  selector: 'app-firebase-functions',
  templateUrl: './firebase-functions.page.html',
  styleUrls: ['./firebase-functions.page.scss'],
})
export class FirebaseFunctionsPage {
  private readonly githubUrl =
    'https://github.com/robingenz/capacitor-firebase';

  constructor() {}

  ionViewDidEnter() {
    FirebaseAnalytics.setCurrentScreen({
      screenName: 'FirebaseFunctionsPage',
    });
  }

  public openOnGithub(): void {
    window.open(this.githubUrl, '_blank');
  }

  public async callByName(): Promise<void> {
    const result = await FirebaseFunctions.callByName({
      name: 'helloWorld',
      data: {
        array: [1, 2, 3],
        date: new Date(),
        number: 123,
        object: {
          key: 'value',
        },
        string: 'Hello World!',
        boolean: true,
      },
    });
    console.log({ result });
  }

  public async callByUrl(): Promise<void> {
    const result = await FirebaseFunctions.callByUrl({
      url: '',
    });
    console.log({ result });
  }
}
