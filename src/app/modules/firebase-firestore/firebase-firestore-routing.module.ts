import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirebaseFirestorePage } from './firebase-firestore.page';

const routes: Routes = [
  {
    path: '',
    component: FirebaseFirestorePage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FirebaseFirestorePageRoutingModule {}
