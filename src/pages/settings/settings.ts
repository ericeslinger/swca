import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ForcePlump } from '../../providers/plump';
import { UserSettingsModel, UserSettingsData } from '../../models/settings';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class Settings {

  settings: UserSettingsModel;
  settings$: Observable<UserSettingsData>;
  constructor(public navCtrl: NavController, public navParams: NavParams, public plump: ForcePlump) {
    // TODO not injecting properly
    // factory is returning a promise that isn't resolved.
    // look into APP_INITIALIZER
    this.settings = this.plump.find({ typeName: 'userSettings', id: 'me' });
    this.settings$ = this.settings.asObservable(['attributes']);
  }

}
