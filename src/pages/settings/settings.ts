import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IonicPage, NavController, NavParams, Toggle } from 'ionic-angular';
import { ForcePlump } from '../../providers/plump';
import { UserSettingsModel, UserSettingsData } from '../../models/settings';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class Settings implements OnInit {

  settings: UserSettingsModel;
  leftHanded: boolean;
  settings$: Observable<UserSettingsData>;

  ngOnInit() {
    return this.plump.find({ typeName: 'userSettings', id: 'me' })
    .get(['attributes'])
    .then((v) => {
      if (v === null) {
        return new UserSettingsModel({
          name: 'Potato',
          leftHanded: false,
          id: 'me',
        }, this.plump).save();
      }
    }).then(() => {
      this.settings = this.plump.find({ typeName: 'userSettings', id: 'me' });
      this.settings$ = this.settings.asObservable()
      .do(v => console.log(v));
      // debugger;
      // this.settings$.subscribe((v) => console.log(v));
    });
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public plump: ForcePlump) {
    // TODO not injecting properly
    // factory is returning a promise that isn't resolved.
    // look into APP_INITIALIZER
  }

  toggleHand($evt) {
    console.log($evt);
    return this.settings.set({ attributes: { leftHanded: $evt } } )
    .save();
  }

}
