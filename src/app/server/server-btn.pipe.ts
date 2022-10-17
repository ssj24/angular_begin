import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'serverBtn'
})
export class ServerBtnPipe implements PipeTransform {

  transform(value): string {
    return `${value.name}`;
  }

}
