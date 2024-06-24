import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FirebaseFunctionsPageRoutingModule } from './firebase-functions-routing.module';

import { FirebaseFunctionsPage } from './firebase-functions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FirebaseFunctionsPageRoutingModule,
  ],
  declarations: [FirebaseFunctionsPage],
})
export class FirebaseFunctionsPageModule {}
