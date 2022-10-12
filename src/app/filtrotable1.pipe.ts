import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtrotable1'
})
export class Filtrotable1Pipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
