import { Model, Schema, RelationshipSchema, RelationshipItem, ModelData } from 'plump';
import { PipCount, DieNames, DieType } from '../services/diceData';

export const HistoryListSchema: RelationshipSchema = {
  sides: {
    items: { otherType: 'historyItem', otherName: 'histories' },
    histories: { otherType: 'history', otherName: 'items' },
  },
};

export interface HistoryItemAttributes {
  id?: number;
  roller: string;
  dice: DieType[];
  faces: string[][];
  result: PipCount;
  ts: Date;
}

export interface HistoryItem {
  typeName: 'historyItem';
  id: number;
  attributes: HistoryItemAttributes;
  relationships: {
    histories: RelationshipItem[];
  };
}

export interface HistoryList {
  typeName: 'history';
  id: string;
  attributes: {
    id: string;
  };
  relationships: {
    items: RelationshipItem[];
  };
}
@Schema({
  idAttribute: 'id',
  name: 'historyItem',
  relationships: {
    histories: { type: HistoryListSchema },
  },
  attributes: {
    id: { type: 'number', readOnly: false },
    dice: { type: 'array', readOnly: false },
    roller: { type: 'string', readOnly: false },
    faces: { type: 'array', readOnly: false },
    result: { type: 'object', readOnly: false },
    ts: { type: 'date', readOnly: false },
  }
}) export class HistoryItemModel extends Model<HistoryItem> { }

@Schema({
  idAttribute: 'id',
  name: 'history',
  attributes: {
    id: { type: 'string', readOnly: false },
  },
  relationships: {
    items: { type: HistoryListSchema },
  },
}) export class HistoryListModel extends Model<ModelData> {}
