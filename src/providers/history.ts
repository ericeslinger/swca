import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, Subject } from 'rxjs';

import { ForcePlump } from './plump';
import { UserSettingsService } from './userSettings';
import { HistoryItem, HistoryList, HistoryItemModel, HistoryListModel, HistoryItemAttributes, PartialRoll } from '../models/history';

@Injectable()
export class HistoryService {
  private _historyModel = this.plump.find({ typeName: 'history', id: 'me' });
  private _history = new BehaviorSubject<HistoryItemModel[]>([]);
  history$ = this._history.asObservable();

  private _rollStream = new Subject<PartialRoll>();
  roll$ = this._rollStream.asObservable();

  constructor(public plump: ForcePlump, private settings: UserSettingsService) {
    this._historyModel
    .asObservable()
    .map(v => v.relationships.items || [])
    .flatMap(v => {
      return Observable.fromPromise(
        Promise.all(v.map(i => this.plump.find({ typeName: 'historyItem', id: i.id }).get()))
      )
    })
    .map(v => v.sort((a, b) => b.attributes.ts.getTime() - a.attributes.ts.getTime()))
    .subscribe((v: HistoryItemModel[]) => this._history.next(v));

    Observable.combineLatest(
      this.roll$,
      this.settings.settings$
    ).distinctUntilChanged((o, n) => o[0] === n[0])
    .subscribe(v => {
      const r: HistoryItemAttributes = Object.assign(
        {},
        v[0],
        { roller: v[1].attributes.name }
      );
      this.addRoll(r);
    });
  }

  addRoll(roll: HistoryItemAttributes) {
    new HistoryItemModel(roll, this.plump).save()
    .then((v) => {
      return this._historyModel.add('items', v).save();
    });
  }

  notifyRoll(roll: PartialRoll) {
    this._rollStream.next(roll);
  }

  clear() {
    return this._historyModel.get('relationships.items')
    .then((v) => {
      v.relationships.items.forEach(i => this._historyModel.remove('items', i));
      return this._historyModel.save();
    })
  }

}
