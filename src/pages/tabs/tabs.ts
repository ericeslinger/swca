import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { SkillRoll } from '../skill-roll/skill-roll';
import { Critical } from '../critical/critical';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = SkillRoll;
  tab2Root = AboutPage;
  tab3Root = Critical;

  // constructor() { }
}
