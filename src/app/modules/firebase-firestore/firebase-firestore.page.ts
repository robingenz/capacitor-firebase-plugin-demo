import { Component } from '@angular/core';
import { FirebaseAnalytics } from '@capacitor-firebase/analytics';
import {
  FieldValue,
  FirebaseFirestore,
  GeoPoint,
  Timestamp,
} from '@capacitor-firebase/firestore';
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

  public async writeBatch(): Promise<void> {
    await FirebaseFirestore.writeBatch({
      operations: [
        {
          type: 'update',
          reference: `samples/${Capacitor.getPlatform()}`,
          data: {
            date: new Date(),
          },
        },
        {
          type: 'set',
          reference: `samples/${Capacitor.getPlatform()}-2`,
          data: {
            integer: this.getRandomInt(100),
          },
        },
      ],
    });
  }

  public async setDocumentWithSpecialTypes(): Promise<void> {
    await FirebaseFirestore.setDocument({
      reference: `samples/${Capacitor.getPlatform()}-special`,
      data: {
        timestamp: Timestamp.now(),
        timestampFromDate: Timestamp.fromDate(new Date('2025-01-01')),
        geopoint: new GeoPoint(48.1351, 11.582),
        nestedTimestamp: {
          createdAt: Timestamp.now(),
        },
        string: 'Hello, Special Types!',
      },
    });
  }

  public async getDocumentWithSpecialTypes(): Promise<void> {
    const result = await FirebaseFirestore.getDocument({
      reference: `samples/${Capacitor.getPlatform()}-special`,
    });
    console.log({ result });
    const data = result.snapshot.data as any;
    if (data) {
      console.log('timestamp:', data.timestamp);
      console.log('timestamp.toDate():', data.timestamp?.toDate());
      console.log('geopoint:', data.geopoint);
      console.log('geopoint.latitude:', data.geopoint?.latitude);
      console.log(
        'nestedTimestamp:',
        data.nestedTimestamp?.createdAt?.toDate(),
      );
    }
  }

  public async updateDocumentWithFieldValues(): Promise<void> {
    await FirebaseFirestore.updateDocument({
      reference: `samples/${Capacitor.getPlatform()}-special`,
      data: {
        updatedAt: FieldValue.serverTimestamp(),
        tags: FieldValue.arrayUnion('firebase', 'capacitor'),
        views: FieldValue.increment(1),
      },
    });
  }

  public async deleteFieldValue(): Promise<void> {
    await FirebaseFirestore.updateDocument({
      reference: `samples/${Capacitor.getPlatform()}-special`,
      data: {
        string: FieldValue.delete(),
      },
    });
  }

  public async arrayRemoveFieldValue(): Promise<void> {
    await FirebaseFirestore.updateDocument({
      reference: `samples/${Capacitor.getPlatform()}-special`,
      data: {
        tags: FieldValue.arrayRemove('capacitor'),
      },
    });
  }

  private getRandomInt(max: number): number {
    return Math.floor(Math.random() * max);
  }
}
