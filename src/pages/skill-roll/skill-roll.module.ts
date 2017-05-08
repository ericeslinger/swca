import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SkillRoll } from './skill-roll';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    SkillRoll,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(SkillRoll),
  ],
  exports: [
    SkillRoll
  ]
})
export class SkillRollModule {}
