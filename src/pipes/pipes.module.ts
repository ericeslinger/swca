import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { CommonModule } from '@angular/common';
import { TimeAgo } from './timeAgo.pipe';


@NgModule({
  declarations: [
    TimeAgo
  ],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [
    TimeAgo,
  ]
})
export class PipesModule {}
