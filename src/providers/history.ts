import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

import { ForcePlump } from './plump';
import { HistoryItem, HistoryList, HistoryItemModel, HistoryListModel, HistoryItemAttributes } from '../models/history';

@Injectable()
export class HistoryService {
  _historyModel = this.plump.find({ typeName: 'history', id: 'me' });
  _history = new BehaviorSubject<HistoryItemModel[]>([]);
  history$ = this._history.asObservable();
  constructor(public plump: ForcePlump) {
    this._historyModel
    .get()
    .then((me) => {
      console.log('initial load', me)
      if (me === null) {
        return new HistoryListModel({ id: 'me' }, this.plump).save();
      }
    })
    .then(() => {
      // TODO: error fetching relationships
      return this.plump.find({ typeName: 'history', id: 'me' })
      .asObservable()
      .map(v => v.relationships.items || [])
      .map(v => v.map(i => this.plump.find({ typeName: 'historyItem', id: i.id })))
      .do(v => console.log(v))
      .subscribe((v: HistoryItemModel[]) => this._history.next(v));
    });
  }
  addRoll(roll: HistoryItemAttributes) {
    new HistoryItemModel(roll, this.plump).save()
    .then((v) => {
      return this._historyModel.add('items', v).save();
    });
  }
}
