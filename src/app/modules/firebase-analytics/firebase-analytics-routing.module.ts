import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FirebaseAnalyticsPage } from './firebase-analytics.page';

const routes: Routes = [
  {
    path: '',
    component: FirebaseAnalyticsPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FirebaseAnalyticsPageRoutingModule {}
