import { Component, OnInit, ViewChild, OnDestroy, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IonicPage, NavController, NavParams, Toggle, TextInput } from 'ionic-angular';
import { ForcePlump } from '../../providers/plump';
import { UserSettingsModel, UserSettingsData } from '../../models/settings';

@IonicPage({
  segment: 'settings',
  name: 'settings',
})
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class Settings implements OnInit, OnDestroy, AfterViewInit {

  settings: UserSettingsModel;
  leftHanded: boolean;
  name: string;
  settings$: Observable<UserSettingsData>;
  @ViewChild('nameInput') nameInput: TextInput;
  unsubs = [];

  ngOnInit() {
    return this.plump.find({ typeName: 'userSettings', id: 'me' })
    .get(['attributes'])
    .then((v) => {
      if (v === null) {
        return new UserSettingsModel({
          name: 'Potato',
          leftHanded: false,
          id: 'me',
        }, this.plump).save();
      } else {
        this.leftHanded = v.attributes.leftHanded;
        this.name = v.attributes.name;
      }
    }).then(() => {
      this.settings = this.plump.find({ typeName: 'userSettings', id: 'me' });
      this.settings$ = this.settings.asObservable();
      this.settings$.subscribe((v) => {
        this.leftHanded = v.attributes.leftHanded;
        this.name = v.attributes.name;
      });
    });
  }

  ngAfterViewInit() {
    this.unsubs.push(
      Observable.fromEvent(this.nameInput.getNativeElement(), 'keypress')
      .debounceTime(500)
      .map(v => this.nameInput.value)
      .subscribe((v) => {
        this.settings.set({ attributes: { name: this.nameInput.value } }).save();
      })
    );
  }

  ngOnDestroy() {
    this.unsubs.forEach(v => v.unsubscribe());
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public plump: ForcePlump) { }

  toggleHand($evt) {
    return this.settings.set({ attributes: { leftHanded: $evt } } )
    .save();
  }

}
