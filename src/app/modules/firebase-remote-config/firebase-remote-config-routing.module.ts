import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FirebaseRemoteConfigPage } from './firebase-remote-config.page';

const routes: Routes = [
  {
    path: '',
    component: FirebaseRemoteConfigPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FirebaseRemoteConfigPageRoutingModule {}
