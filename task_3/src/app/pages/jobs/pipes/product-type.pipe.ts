import { Pipe, PipeTransform } from '@angular/core';
import { PRODUCT_TYPE } from '../models/product.model'

@Pipe({
  name: 'productType',
})
export class ProductTypePipe implements PipeTransform {
  transform(type: number): string {
    return PRODUCT_TYPE[type];
  }
}
