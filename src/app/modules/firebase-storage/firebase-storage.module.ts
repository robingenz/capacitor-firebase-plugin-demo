import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { FirebaseStoragePageRoutingModule } from './firebase-storage-routing.module';
import { FirebaseStoragePage } from './firebase-storage.page';

@NgModule({
  imports: [SharedModule, FirebaseStoragePageRoutingModule],
  declarations: [FirebaseStoragePage],
})
export class FirebaseStoragePageModule {}
