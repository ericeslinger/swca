import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

import { ForcePlump } from './plump';
import { UserSettingsModel, UserSettingsData } from '../models/settings';

@Injectable()
export class UserSettingsService {
  _settingsModel = new UserSettingsModel({ id: 'me' }, this.plump);
  // _settings = new BehaviorSubject<UserSettingsData>({
  //   typeName: 'userSettings',
  //   id: 'me',
  //   relationships: {},
  //   attributes: {
  //     name: 'loading',
  //     leftHanded: false,
  //     id: 'me',
  //   },
  // });
  // settings$ = this._settings.asObservable();
  settings$ = this._settingsModel.asObservable();
  constructor(public plump: ForcePlump) {
    // this._settingsModel
    // .asObservable()
    // .subscribe((v) => this._settings.next(v));
  }
}
