import { Model, Schema } from 'plump';

export interface UserSettingsData {
  typeName: 'userSettings';
  id: string;
  attributes: {
    name: string;
    id: string;
    leftHanded: boolean;
  };
  relationships: {};
}

@Schema({
  idAttribute: 'id',
  name: 'userSettings',
  relationships: {},
  attributes: {
    name: { type: 'string', readOnly: false },
    id: { type: 'string', readOnly: false },
    leftHanded: { type: 'boolean', readOnly: false },
  }
}) export class UserSettingsModel extends Model<UserSettingsData> {}
