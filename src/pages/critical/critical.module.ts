import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Critical } from './critical';

@NgModule({
  declarations: [
    Critical,
  ],
  imports: [
    IonicPageModule.forChild(Critical),
  ],
  exports: [
    Critical
  ]
})
export class CriticalModule {}
