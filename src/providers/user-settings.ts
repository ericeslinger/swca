import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Observable, BehaviorSubject } from 'rxjs';

export interface Settings {
  userName: string;
  leftHanded: boolean;
}

@Injectable()
export class UserSettings {

  constructor(private storage: Storage) { }

}
