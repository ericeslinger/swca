import { Model, Schema, RelationshipSchema, RelationshipItem, ModelData } from 'plump';
import { PipCount, DieNames, DieType, PipNames } from './dice';

export const HistoryListSchema: RelationshipSchema = {
  sides: {
    items: { otherType: 'historyItem', otherName: 'histories' },
    histories: { otherType: 'history', otherName: 'items' },
  },
};

export interface RolledDie {
  type: DieType;
  showing: PipNames[];
}

export interface PartialRoll {
  dice: RolledDie[];
  result: PipCount;
  ts: Date;
}

export interface RollData extends PartialRoll {
  roller: string;
}

export interface HistoryItemAttributes extends PartialRoll {
  id?: number;
  roller: string;
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
    ts: { type: 'date', readOnly: false },
    dice: { type: 'array', readOnly: false },
    roller: { type: 'string', readOnly: false },
    result: { type: 'object', readOnly: false },
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
