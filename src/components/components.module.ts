import { NgModule } from '@angular/core';
import { CriticalRoller } from './critical-roller/critical-roller';
import { DieChooser } from './die-chooser/die-chooser';
import { RollResult } from './roll-result/roll-result';
import { NIcons } from './n-icons/n-icons';
import { IonicModule } from 'ionic-angular';

import { CommonModule } from '@angular/common';

import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  declarations: [
    CriticalRoller,
    DieChooser,
    RollResult,
    NIcons,
  ],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule,
  ],
  exports: [
    CriticalRoller,
    DieChooser,
    RollResult,
    NIcons
  ]
})
export class ComponentsModule {}
