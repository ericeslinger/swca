import { NgModule, ErrorHandler, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyApp } from './app.component';

import { HistoryModule } from '../pages/history/history.module';
import { SettingsModule } from '../pages/settings/settings.module';
import { SkillRollModule } from '../pages/skill-roll/skill-roll.module';
import { RollResultsModule } from '../pages/roll-results/roll-results.module';
import { DieChooser } from '../components/die-chooser/die-chooser';
import { NIcons } from '../components/n-icons/n-icons';
import { CriticalRoller } from '../components/critical-roller/critical-roller';

import { ForcePlump } from '../providers/plump';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(MyApp),
    HistoryModule,
    RollResultsModule,
    SettingsModule,
    SkillRollModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ForcePlump,
    { provide: APP_INITIALIZER, useFactory: (p: ForcePlump) => () => p.ready(), deps: [ForcePlump], multi: true },
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}
