import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HistoryService } from '../../providers/history';

@IonicPage()
@Component({
  selector: 'page-history',
  templateUrl: 'history.html',
})
export class History {

  constructor(public navCtrl: NavController, public navParams: NavParams, public history: HistoryService) {
  }

}
