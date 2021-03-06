import { Component, AfterViewInit, ViewChildren, ViewChild, QueryList } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Subject, Observable } from 'rxjs';
import { RollResults } from '../roll-results/roll-results';
import { DieChooser } from '../../components/die-chooser/die-chooser';
import { AllDice, DiceNames, DieType } from '../../models/dice';
import { ForcePlump } from '../../providers/plump';
import { UserSettingsData } from '../../models/settings';

@IonicPage({
  segment: 'roll',
  name: 'roll',
})
@Component({
  selector: 'page-skill-roll',
  templateUrl: 'skill-roll.html',
})
export class SkillRoll implements AfterViewInit {

  // dieCounts: Observable<{ [name in Dice.DieNames]: number }>;
  selected$: Observable<DieType[]>;
  settings$: Observable<UserSettingsData>;
  dice: { [name: string]: DieType };
  diceNames: string[];
  @ViewChild('roll') rollButton;
  @ViewChildren(DieChooser) counters: QueryList<DieChooser>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public plump: ForcePlump) {
    this.dice = AllDice;
    this.diceNames = ['ability', 'proficiency', 'boost', 'difficulty', 'challenge', 'setback', 'force'];
    this.settings$ = this.plump.find({ typeName: 'userSettings', id: 'me' }).asObservable();
  }

  ngAfterViewInit() {
    this.selected$ = Observable.merge(
      ...this.counters.toArray()
      .map(c => c.count$.map(v => ({ die: c.die, count: v })))
    )
    .scan(
      (acc, v) => Object.assign({}, acc, { [v.die.label.toLowerCase()]: v }),
      {
        ability: 0,
        proficiency: 0,
        difficulty: 0,
        challenge: 0,
        boost: 0,
        setback: 0,
        force: 0,
      }
    ).map((v) => {
      return this.diceNames
      .map(n => new Array(v[n].count).fill(this.dice[n]))
      .reduce((acc, val) => acc.concat(val), []);
    });

    Observable.combineLatest(
      Observable.fromEvent(this.rollButton.getElementRef().nativeElement, 'click'),
      this.selected$
    )
    .distinctUntilChanged((o, n) => o[0] === n[0])
    .subscribe((e) => this.navCtrl.push('results', { dice: e[1] }));
  }

  // ngOnDestroy() { }

  doRoll() {
    this.navCtrl.push(RollResults);
  }

  doReset() {
    this.counters.toArray().forEach(v => v.controlClick(0));
  }

}
