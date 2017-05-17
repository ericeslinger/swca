import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { History } from './history';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    History,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(History),
  ],
  exports: [
    History
  ]
})
export class HistoryModule {}
