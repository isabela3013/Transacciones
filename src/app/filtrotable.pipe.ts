import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtrotable'
})
export class FiltrotablePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
