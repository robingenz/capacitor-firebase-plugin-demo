import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FirebaseFunctionsPage } from './firebase-functions.page';

const routes: Routes = [
  {
    path: '',
    component: FirebaseFunctionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FirebaseFunctionsPageRoutingModule {}
