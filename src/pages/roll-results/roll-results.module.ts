import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RollResults } from './roll-results';

@NgModule({
  declarations: [
    RollResults,
  ],
  imports: [
    IonicPageModule.forChild(RollResults),
  ],
  exports: [
    RollResults
  ]
})
export class RollResultsModule {}
