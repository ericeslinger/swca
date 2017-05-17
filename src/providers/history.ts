import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

import { ForcePlump } from './plump';
import { HistoryItem, HistoryList, HistoryItemModel, HistoryListModel } from '../models/history';

@Injectable()
export class HistoryService {
  _history = new BehaviorSubject<HistoryItemModel[]>([]);
  history$ = this._history.asObservable();
  constructor(public plump: ForcePlump) {
    this.plump.find({ typeName: 'history', id: 'me' })
    .get()
    .then((me) => {
      if (me === null) {
        return new HistoryListModel({ id: 'me' }, this.plump).save();
      }
    })
    .then(() => {

      // TODO: error fetching relationships
      return this.plump.find({ typeName: 'history', id: 'me' }).asObservable(['relationships'])
      .map(v => v.relationships.items)
      .map(v => v.map(i => this.plump.find({ typeName: 'historyItem', id: i.id })))
      .subscribe((v: HistoryItemModel[]) => this._history.next(v));
    });
  }
}
