import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currenyConverter'
})
export class CurrenyConverterPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {

    return "Hola Amigo, this is custom pipe";
  }

}
