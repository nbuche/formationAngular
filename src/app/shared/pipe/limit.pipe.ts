import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limit'
})
export class LimitPipe implements PipeTransform {

  transform(value: any, limit:Number= 100): any {

    if(value.length>limit){
      return value.substr( 0, limit) + '...';
    }
    return value;
  }

}
