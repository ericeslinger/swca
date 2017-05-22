import { Component, Input, Output } from '@angular/core';
import { DieType } from '../../models/dice';
import { Subject, Observable } from 'rxjs';

@Component({
  selector: 'die-chooser',
  templateUrl: './die-chooser.html',
})
export class DieChooser {

  @Input() die: DieType;
  private countSubject = new Subject<number>();
  count$ = this.countSubject.asObservable()
  .scan((acc, v) => {
    if (v === 0) {
      return 0;
    } else {
      return Math.min(Math.max(acc + v, 0), 8);
    }
  }, 0)
  .startWith(0);

  iterableCount$ = this.count$
  .map(n => new Array(n).fill(0));

  // constructor() { }

  controlClick(incr: number) {
    this.countSubject.next(incr);
  }

}
