import { NgModule } from '@angular/core';

import { FirebaseFirestorePageRoutingModule } from './firebase-firestore-routing.module';

import { SharedModule } from '@app/shared';
import { FirebaseFirestorePage } from './firebase-firestore.page';

@NgModule({
  imports: [SharedModule, FirebaseFirestorePageRoutingModule],
  declarations: [FirebaseFirestorePage],
})
export class FirebaseFirestorePageModule {}
