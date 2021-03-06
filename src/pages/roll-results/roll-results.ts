import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { trigger, state, style, animate, transition } from '@angular/animations';

import { HistoryService } from '../../providers/history';
import { UserSettingsService } from '../../providers/settings';
import { DieType, PipCount, PipNames } from '../../models/dice';
import { RolledDie } from '../../models/history';
import { randItem } from '../../services/actuallyRandom';


@IonicPage({
  segment: 'results',
  name: 'results',
})
@Component({
  selector: 'page-roll-results',
  templateUrl: 'roll-results.html',
  animations: [
    trigger('slideInOut', [
      state('in', style({
        'max-height': '400px',
        overflow: 'hidden',
      })),
      state('out', style({
        overflow: 'hidden',
        height: '0px',
      })),
      transition('in => out', animate('300ms ease-in-out')),
      transition('out => in', animate('300ms ease-in-out')),
    ]),
    trigger('turnDown', [
      state('in', style({
        transform: 'rotate(-90deg)',
      })),
      state('out', style({
        transform: 'rotate(0)',
      })),
      transition('in => out', animate('300ms ease-in-out')),
      transition('out => in', animate('300ms ease-in-out')),
    ]),
  ]
})
export class RollResults {

  dice: DieType[];
  rolled: RolledDie[];
  results: { [name in PipNames]: number };
  success: boolean;
  net: number;
  advantage: number = 0;
  threat: number = 0;
  forceRoll: boolean;
  resultString: string;
  showingCrit: string = 'out';

  constructor(public navCtrl: NavController, public navParams: NavParams, public history: HistoryService) {
    this.dice = navParams.data.dice;
    this.rolled = this.dice.map((v) => {
      return {
        showing: randItem(v.sides),
        type: v,
      }
    });
    this.results = this.rolled
    .reduce((acc, val) => acc.concat(val.showing), [])
    .reduce((acc, val) => Object.assign({}, acc, { [val]: acc[val] + 1 }), {
      success: 0,
      failure: 0,
      advantage: 0,
      blank: 0,
      threat: 0,
      despair: 0,
      dark: 0,
      light: 0,
      triumph: 0,
    });




    this.forceRoll = this.dice.filter(v => v.label === 'Force').length > 0;
    const netSuccess = this.results.success + this.results.triumph - this.results.failure - this.results.despair;
    const netAdvantage = this.results.advantage - this.results.threat;

    if ((this.results.triumph > 0) && (this.results.despair === 0)) {
      this.resultString = 'Triumphant';
    } else if ((this.results.triumph === 0) && (this.results.despair > 0)) {
      this.resultString = 'Despairing';
    } else if ((this.results.triumph > 0) && (this.results.despair > 0)) {
      this.resultString = 'Triumphant, Despairing';
    } else {
      this.resultString = '';
    }

    if (netSuccess > 0) {
      this.success = true;
      this.net = netSuccess;
      this.resultString = `${this.resultString} Success`;
    } else {
      this.success = false;
      this.net = Math.abs(netSuccess);
      this.resultString = `${this.resultString} Failure`;
    }

    if (netAdvantage > 0) {
      this.advantage = netAdvantage;
    } else if (netAdvantage < 0) {
      this.threat = Math.abs(netAdvantage);
    }

    this.history.notifyRoll({
      dice: this.rolled,
      result: this.results,
      ts: new Date(),
    })
  }

  toggleCrit() {
    this.showingCrit = this.showingCrit === 'in' ? 'out' : 'in';
  }
}
