import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { FirebaseMessagingPageRoutingModule } from './firebase-messaging-routing.module';
import { FirebaseMessagingPage } from './firebase-messaging.page';

@NgModule({
  imports: [SharedModule, FirebaseMessagingPageRoutingModule],
  declarations: [FirebaseMessagingPage],
})
export class FirebaseMessagingPageModule {}
