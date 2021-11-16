import { Pipe, PipeTransform } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';

@Pipe({
  name: 'orderList'
})
export class OrderListPipe implements PipeTransform {

  transform(value: TrackModel[], arg: string | null = null, sort: string = 'asc'): TrackModel[] {
    try {
      if (arg === null) {
        return value
      } else {
        const list = value.sort(function (a, b) {
          if (a.name > b.name) {
            return 1;
          }
          if (a.name < b.name) {
            return -1;
          }
          // a must be equal to b
          return 0;
        });
        return sort === 'asc' ? list : list.reverse()
      }

    } catch (error) {
      console.log('Algo pasó')
      return value
    }
  }

}
