import { NgModule } from '@angular/core';

import { FirebaseAppCheckPageRoutingModule } from './firebase-app-check-routing.module';

import { SharedModule } from '@app/shared';
import { FirebaseAppCheckPage } from './firebase-app-check.page';

@NgModule({
  imports: [SharedModule, FirebaseAppCheckPageRoutingModule],
  declarations: [FirebaseAppCheckPage],
})
export class FirebaseAppCheckPageModule {}
