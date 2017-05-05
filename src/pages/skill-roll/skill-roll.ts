import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RollResults } from '../roll-results/roll-results';

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
export class SkillRoll {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SkillRoll');
  }

  doRoll() {
    this.navCtrl.push(RollResults);
  }

}
