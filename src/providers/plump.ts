import { Injectable } from '@angular/core';

import { Plump, Model, MemoryStore, Schema } from 'plump';
import { LocalForageStore } from 'plump-store-localforage';

import { UserSettingsModel } from '../models/settings';

class HotCache extends MemoryStore {
  constructor() {
    super({ terminal: false });
  }
  hot() { return true; }
}

@Injectable()
export class ForcePlump extends Plump {

  private _ready: Promise<ForcePlump>;

  ready(): Promise<ForcePlump> {
    if (this._ready === undefined) {
      this._ready = this.setTerminal( new LocalForageStore({ terminal: true }) )
      .then(() => this.addCache( new HotCache() ))
      .then(() => this.addType(UserSettingsModel))
      .then(() => this);
    }
    return this._ready;
  }
}

export const PlumpProvider = {
  provide: ForcePlump,
  useFactory: () => new ForcePlump().ready(),
};
