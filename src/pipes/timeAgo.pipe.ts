import { Pipe, PipeTransform } from '@angular/core';

import * as moment from 'moment';

@Pipe({
  name: 'timeAgo',
})
export class TimeAgo implements PipeTransform {
  transform(value: Date, ...args) {
    return moment(value).fromNow();
  }
}
