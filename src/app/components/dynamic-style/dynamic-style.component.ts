import { Component } from '@angular/core';

@Component({
  selector: 'app-dynamic-style',
  templateUrl: './dynamic-style.component.html',
  styleUrls: ['./dynamic-style.component.scss']
})
export class DynamicStyleComponent {


  color = "red"
  font = '30px' ;
  fontSize = 20 ;

  fontBig = 80;
  fontsmall = 40 ;

  zoom = true ;

  changeZoom(){

    this.zoom = !this.zoom ;

  }
}
