import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SkillRoll } from './skill-roll';

@NgModule({
  declarations: [
    SkillRoll,
  ],
  imports: [
    IonicPageModule.forChild(SkillRoll),
  ],
  exports: [
    SkillRoll
  ]
})
export class SkillRollModule {}
