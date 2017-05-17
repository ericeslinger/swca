import { Component, ViewChild } from '@angular/core';
import { Platform, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { SkillRoll } from '../pages/skill-roll/skill-roll';
import { Settings } from '../pages/settings/settings';
import { History } from '../pages/history/history';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  // rootPage: any = SkillRoll;
  rootPage: any = SkillRoll;
  rollPage = SkillRoll;
  settingsPage = Settings;
  historyPage = History;
  @ViewChild('content') nav: NavController;

  openPage(p) {
    this.rootPage = p;
  }

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
