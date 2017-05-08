import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RollResults } from './roll-results';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    RollResults,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(RollResults),
  ],
  exports: [
    RollResults
  ]
})
export class RollResultsModule {}
