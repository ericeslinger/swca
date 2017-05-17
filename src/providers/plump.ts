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
