import { Component } from '@angular/core';
import { environment } from '@env/environment';
import { Platform } from '@ionic/angular';
import { initializeApp } from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private readonly platform: Platform) {
    this.initializeFirebase();
  }

  public async initializeFirebase(): Promise<void> {
    if (this.platform.is('capacitor')) {
      return;
    }
    initializeApp(environment.firebase);
  }
}
