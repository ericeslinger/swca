import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CriticalRoller } from './critical-roller';

@NgModule({
  declarations: [
    CriticalRoller,
  ],
  imports: [
    IonicPageModule.forChild(CriticalRoller),
  ],
  exports: [
    CriticalRoller
  ]
})
export class CriticalRollerModule {}
