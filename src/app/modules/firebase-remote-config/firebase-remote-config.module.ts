import { NgModule } from '@angular/core';

import { FirebaseRemoteConfigPageRoutingModule } from './firebase-remote-config-routing.module';

import { SharedModule } from '@app/shared';
import { FirebaseRemoteConfigPage } from './firebase-remote-config.page';

@NgModule({
  imports: [SharedModule, FirebaseRemoteConfigPageRoutingModule],
  declarations: [FirebaseRemoteConfigPage],
})
export class FirebaseRemoteConfigPageModule {}
