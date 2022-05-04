import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FirebaseMessagingPage } from './firebase-messaging.page';

const routes: Routes = [
  {
    path: '',
    component: FirebaseMessagingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FirebaseMessagingPageRoutingModule {}
