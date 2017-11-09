import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'monetaire'
})
export class MonetairePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return new Intl.NumberFormat('fr-FR',
    {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 0
    }).format(value);
  }

}
