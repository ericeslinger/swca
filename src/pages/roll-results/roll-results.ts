import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DieType, PipCount, PipNames } from '../../services/diceData';
import { randItem } from '../../services/actuallyRandom';

/**
 * Generated class for the RollResults page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-roll-results',
  templateUrl: 'roll-results.html',
})
export class RollResults {

  dice: DieType[];
  results: { [name in PipNames]: number };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.dice = navParams.data.dice;
    this.results = this.dice.map(v => randItem(v.sides))
    .reduce((acc, val) => acc.concat(val), [])
    .reduce((acc, val) => Object.assign({}, acc, { [val]: acc[val] + 1 }), {
      success: 0,
      failure: 0,
      advantage: 0,
      blank: 0,
      threat: 0,
      despair: 0,
      dark: 0,
      light: 0,
      triumph: 0
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RollResults');
  }

}
