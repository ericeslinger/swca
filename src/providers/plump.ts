import { Injectable } from '@angular/core';

import { Plump, Model, MemoryStore, Schema } from 'plump';
import { LocalForageStore } from 'plump-store-localforage';

import { UserSettingsModel } from '../models/settings';
import { HistoryItemModel, HistoryListModel } from '../models/history';

class HotCache extends MemoryStore {
  constructor() {
    super({ terminal: false });
  }
  hot(ref) {
    if (this.store[this.keyString(ref)]) {
      return true;
    } else {
      return false;
    }
  }
}

@Injectable()
export class ForcePlump extends Plump {

  private _ready: Promise<ForcePlump>;

  initializeSingletons(): Promise<ForcePlump> {
    return this.ready()
    .then(() => this.find({ typeName: 'userSettings', id: 'me' }).get())
    .then((v) => {
      if (v === null) {
        return new UserSettingsModel({ id: 'me', name: 'Artoo', leftHanded: false }, this).save();
      }
    })
    .then(() => this.find({ typeName: 'history', id: 'me'}).get())
    .then((v) => {
      if (v === null) {
        return new HistoryListModel({ id: 'me' }, this).save();
      }
    })
    .then(() => this);
  }

  ready(): Promise<ForcePlump> {
    if (this._ready === undefined) {
      this._ready = this.setTerminal( new LocalForageStore({ terminal: true }) )
      // this._ready = this.setTerminal( new MemoryStore({ terminal: true }) )
      .then(() => this.addCache( new HotCache() ))
      .then(() => this.addType(UserSettingsModel))
      .then(() => this.addType(HistoryItemModel))
      .then(() => this.addType(HistoryListModel))
      .then(() => this);
    }
    return this._ready;
  }
}
