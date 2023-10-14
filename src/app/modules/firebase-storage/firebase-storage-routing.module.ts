import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FirebaseStoragePage } from './firebase-storage.page';

const routes: Routes = [
  {
    path: '',
    component: FirebaseStoragePage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FirebaseStoragePageRoutingModule {}
