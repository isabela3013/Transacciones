import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroerror'
})
export class FiltroerrorPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
