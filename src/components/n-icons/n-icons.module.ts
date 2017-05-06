import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NIcons } from './n-icons';

@NgModule({
  declarations: [
    NIcons,
  ],
  imports: [
    IonicPageModule.forChild(NIcons),
  ],
  exports: [
    NIcons
  ]
})
export class NIconsModule {}
