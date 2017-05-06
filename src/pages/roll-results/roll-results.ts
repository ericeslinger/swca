import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DieType } from '../../services/diceData';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(navParams);
    this.dice = navParams.data.dice;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RollResults');
  }

}
