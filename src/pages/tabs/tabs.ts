import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { SkillRoll } from '../skill-roll/skill-roll';
import { Critical } from '../critical/critical';
import { HistoryPage } from '../history/history';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  rollRoot = SkillRoll;
  aboutRoot = AboutPage;
  criticalRoot = Critical;
  historyRoot = HistoryPage;

  // constructor() { }
}
