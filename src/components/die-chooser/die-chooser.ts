import { Component } from '@angular/core';

/**
 * Generated class for the DieChooser component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'die-chooser',
  templateUrl: 'die-chooser.html'
})
export class DieChooser {

  text: string;

  constructor() {
    console.log('Hello DieChooser Component');
    this.text = 'Hello World';
  }

}
