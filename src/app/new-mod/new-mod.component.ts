import { ProductService } from './../product.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-new-mod',
  templateUrl: './new-mod.component.html',
  styleUrls: ['./new-mod.component.scss']
})
export class NewModComponent {

  constructor(private product : ProductService){
    
  }

}
