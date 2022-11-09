import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FirebaseAppCheckPage } from './firebase-app-check.page';

const routes: Routes = [
  {
    path: '',
    component: FirebaseAppCheckPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FirebaseAppCheckPageRoutingModule {}
