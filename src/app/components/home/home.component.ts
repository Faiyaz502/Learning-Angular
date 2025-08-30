import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

counterVal = 0;
disable = true ;


increment(){



  this.counterVal ++ ;
  if(this.counterVal > 0){

    this.disable = false ;
  }


}
Decrement(){

  
  this.counterVal --;

 if(this.counterVal == 0){

    this.disable = true ;
  }

  

  
  


}

Reset(){
  this.counterVal = 0 ;

}

}
