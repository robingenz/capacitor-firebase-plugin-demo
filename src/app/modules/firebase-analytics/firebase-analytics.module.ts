import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FirebaseAnalyticsPageRoutingModule } from './firebase-analytics-routing.module';

import { FirebaseAnalyticsPage } from './firebase-analytics.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FirebaseAnalyticsPageRoutingModule
  ],
  declarations: [FirebaseAnalyticsPage]
})
export class FirebaseAnalyticsPageModule {}
