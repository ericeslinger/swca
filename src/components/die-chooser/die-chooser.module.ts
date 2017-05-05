import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DieChooser } from './die-chooser';

@NgModule({
  declarations: [
    DieChooser,
  ],
  imports: [
    IonicPageModule.forChild(DieChooser),
  ],
  exports: [
    DieChooser
  ]
})
export class DieChooserModule {}
