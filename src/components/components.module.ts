import { NgModule } from '@angular/core';
import { CriticalRoller } from './critical-roller/critical-roller';
import { DieChooser } from './die-chooser/die-chooser';
import { NIcons } from './n-icons/n-icons';

import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    CriticalRoller,
    DieChooser,
    NIcons
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    CriticalRoller,
    DieChooser,
    NIcons
  ]
})
export class ComponentsModule {}
