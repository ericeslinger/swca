import { Component, Input, OnInit } from '@angular/core';

/**
 * Generated class for the NIcons component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'n-icons',
  templateUrl: 'n-icons.html',
})
export class NIcons implements OnInit {

  @Input() icon: string;
  @Input() number: number;
  shim: string[];

  // constructor() { }

  ngOnInit() {
    this.shim = new Array(this.number).fill(this.icon);
  }

}
