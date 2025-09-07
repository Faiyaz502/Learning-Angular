import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() {

    console.log('Product Service');

  }

  getProduct(){

    return[
      {name : 'Mobile' , brand : 'samsung',price : 121000},
      {name : 'laptop' , brand : 'dell',price : 20000}


    ]

  }
}
