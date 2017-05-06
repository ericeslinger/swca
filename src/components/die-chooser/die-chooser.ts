import { Component, Input, Output } from '@angular/core';
import { DieType } from '../../services/diceData';
import { Subject, Observable } from 'rxjs';

/**
 * Generated class for the DieChooser component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
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
