import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HistoryService } from '../../providers/history';
import { PipCount } from '../../models/dice';

@IonicPage({
  segment: 'history',
  name: 'history',
})
@Component({
  selector: 'page-history',
  templateUrl: 'history.html',
})
export class History {

  private _memoizedNet: {
    p: PipCount;
    v: {
      success: boolean;
      net: number;
      advantage: number;
      threat: number;
    }
  } = {
    p: null,
    v: {
      success: false,
      net: 0,
      advantage: 0,
      threat: 0,
    }
  }

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public history: HistoryService,
    public alert: AlertController
  ) {
  }

  clear() {
    let confirm = this.alert.create({
      title: 'Clear History?',
      message: 'Are you certain you want to clear your history?',
      buttons: [
        {
          text: 'Cancel',
          handler: () => { }
        },
        {
          text: 'Agree',
          handler: () => {
            this.history.clear();
          }
        }
      ]
    });
    confirm.present();
  }

}
