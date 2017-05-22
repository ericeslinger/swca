import { Component, Input, Output } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { DieType } from '../../models/dice';
import { RollData } from '../../models/history';

@Component({
  selector: 'roll-result',
  templateUrl: './roll-result.html',
  animations: [
    trigger('slide', [
      state('in', style({
        'max-height': '400px',
        overflow: 'hidden',
      })),
      state('out', style({
        overflow: 'hidden',
        height: '0px',
        'padding-top': '0',
        'padding-bottom': '0',
        // display: 'none',
      })),
      transition('in => out', animate('300ms ease-in-out')),
      transition('out => in', animate('300ms ease-in-out')),
    ]),
    trigger('rotateNinety', [
      state('in', style({
        transform: 'rotate(-90deg)',
      })),
      state('out', style({
        transform: 'rotate(0)',
      })),
      transition('in => out', animate('300ms ease-in-out')),
      transition('out => in', animate('300ms ease-in-out')),
    ]),
  ],
})
export class RollResult {

  @Input() roll: RollData;
  showingDetails: 'in' | 'out' = 'out';

  toggleDetails() {
    this.showingDetails = this.showingDetails === 'in' ? 'out' : 'in';
  }

  get netSuccess() {
    return this.roll.result.success + this.roll.result.triumph - this.roll.result.failure - this.roll.result.despair;
  }

  get success() {
    return this.netSuccess > 0;
  }

  get net() {
    return Math.abs(this.netSuccess);
  }

  get netBonus() {
    return this.roll.result.advantage - this.roll.result.threat;
  }

  get good() {
    return this.netBonus > 0;
  }

  get bonus() {
    return Math.abs(this.netBonus);
  }

  get triumph() {
    return this.roll.result.triumph;
  }

  get despair() {
    return this.roll.result.despair;
  }

  get light() {
    return this.roll.result.light;
  }

  get dark() {
    return this.roll.result.dark;
  }

  get resultString() {
    let base = '';
    if (this.triumph > 0 && this.despair > 0) {
      base = 'Triumphant, Despairing ';
    } else if (this.triumph > 0) {
      base = 'Triumphant ';
    } else if (this.despair > 0) {
      base = 'Despairing ';
    }
    if (this.success) {
      return `${base}Success (${this.net}, ${this.netBonus})`;
    } else {
      return `${base}Failure (${this.net}, ${this.netBonus})`;
    }
  }

}
