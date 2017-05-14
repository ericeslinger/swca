import { Component } from '@angular/core';

import { Criticals } from '../../services/critical';
import { randInt } from '../../services/actuallyRandom';
import { Observable, Subject } from 'rxjs';


@Component({
  selector: 'critical-roller',
  templateUrl: 'critical-roller.html',
})
export class CriticalRoller {
  private valSubject = new Subject<number>();
  private eventSubject = new Subject<MouseEvent>();

  critBonus$: Observable<number>;
  crit$: Observable<{name: string, desc: string, val: number}>;

  constructor() {
    this.critBonus$ = this.valSubject.asObservable()
    .scan((acc, v) => {
      if (v === 0) {
        return 0;
      } else {
        return Math.min(Math.max(acc + v, 0), 150);
      }
    }, 0)
    .share()
    .startWith(0);

    this.crit$ = Observable.combineLatest(this.critBonus$, this.eventSubject.asObservable())
    .distinctUntilChanged((n, o) => n[1] === o[1])
    .map(v => v[0])
    .map(v => {
      const critScore = randInt(100) + 1 + v;
      const theCrit = Criticals.find(c => (critScore >= c.min && critScore <= c.max));
      return {
        name: theCrit.name,
        desc: theCrit.description,
        val: critScore,
      };
    }).share();
  }

  rollCrit($event) {
    this.eventSubject.next($event);
  }

  controlClick(val: number) {
    this.valSubject.next(val);
  }

}
