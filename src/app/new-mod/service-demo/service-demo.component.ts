import { ApiCallService } from './../../api-call.service';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-service-demo',
  templateUrl: './service-demo.component.html',
  styleUrls: ['./service-demo.component.scss']
})
export class ServiceDemoComponent implements OnInit {

  productData :  {
    name: string;
    brand: string;
    price: number;
}[] | undefined ;

     products : any = {} ;

  constructor(private product:ProductService ,private api : ApiCallService){



  }
  ngOnInit(): void {
 
  }

  loadData(){

  this.productData = this.product.getProduct();

  //----------------API Call

  this.api.getProduct().subscribe((val:any)=>{

    this.products = val.products ;

    console.log(val.products);



  });

  console.log(this.productData);


  }








}
