import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyApp } from './app.component';

import { HistoryModule } from '../pages/history/history.module';
import { SkillRollModule } from '../pages/skill-roll/skill-roll.module';
import { RollResultsModule } from '../pages/roll-results/roll-results.module';
import { DieChooser } from '../components/die-chooser/die-chooser';
import { NIcons } from '../components/n-icons/n-icons';
import { CriticalRoller } from '../components/critical-roller/critical-roller';

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
    SkillRollModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}
