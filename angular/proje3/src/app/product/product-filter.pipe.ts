import { Pipe, PipeTransform } from '@angular/core';
import {Product} from './product';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  transform(value: Product[], filterText: any): Product[] {
   filterText = filterText?filterText.toLocaleLowerCase:null

    return filterText?value.filter((p:Product)=>p.name//filterText varsa değeri p.name(her bir ürün için) göre filtrele
    .toLocaleLowerCase().indexOf(filterText)!==-1):value;
  }

}
