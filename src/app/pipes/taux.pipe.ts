import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'taux'
})
export class TauxPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return new Intl.NumberFormat('fr-FR',
    {
      style: 'percent',
      minimumFractionDigits: 2
    }).format(value);
  }

}
