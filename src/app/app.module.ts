import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { SkillRoll } from '../pages/skill-roll/skill-roll';
import { HistoryPage } from '../pages/history/history';
import { RollResults } from '../pages/roll-results/roll-results';
import { DieChooser } from '../components/die-chooser/die-chooser';
import { NIcons } from '../components/n-icons/n-icons';
import { CriticalRoller } from '../components/critical-roller/critical-roller';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    SkillRoll,
    RollResults,
    DieChooser,
    NIcons,
    HistoryPage,
    CriticalRoller,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    SkillRoll,
    RollResults,
    HistoryPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}
