import { Component } from '@angular/core';

import { Criticals } from '../../services/critical';
import { randInt } from '../../services/actuallyRandom';
import { Observable, Subject } from 'rxjs';

import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'critical-roller',
  templateUrl: 'critical-roller.html',
  styles: [`
    :host { border: 1px solid black; }
  `],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        'max-height': '400px',
        overflow: 'hidden',
      })),
      state('out', style({
        overflow: 'hidden',
        // opacity: '0',
        height: '0px',
      })),
      transition('in => out', animate('300ms ease-in-out')),
      transition('out => in', animate('300ms ease-in-out')),
    ]),
  ]
})
export class CriticalRoller {
  private valSubject = new Subject<number>();
  private eventSubject = new Subject<MouseEvent>();

  critBonus$: Observable<number>;
  crit$: Observable<{name: string, desc: string, val: number}>;
  showing: string = 'out';

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

  toggleContent() {
    this.showing = this.showing === 'in' ? 'out' : 'in';
  }

  controlClick(val: number) {
    this.valSubject.next(val);
  }

}
