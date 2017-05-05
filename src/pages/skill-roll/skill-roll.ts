import { Component, AfterViewInit, ViewChildren, QueryList } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RollResults } from '../roll-results/roll-results';
import { DieChooser } from '../../components/die-chooser/die-chooser';
import * as Dice from '../../services/diceData';

/**
 * Generated class for the SkillRoll page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-skill-roll',
  templateUrl: 'skill-roll.html',
})
export class SkillRoll implements AfterViewInit {

  dice: Dice.DieType[];
  @ViewChildren(DieChooser) counters: QueryList<DieChooser>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.dice = [
      Dice.AbilityDie,
      Dice.ProficiencyDie,
      Dice.BoostDie,
      Dice.ChallengeDie,
      Dice.DifficultyDie,
      Dice.SetbackDie,
      Dice.ForceDie,
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SkillRoll');
  }

  ngAfterViewInit() {
    console.log(this.counters.toArray());
  }

  doRoll() {
    this.navCtrl.push(RollResults);
  }

}
