import { Component } from '@angular/core';

@Component({
  selector: 'app-if-else',
  templateUrl: './if-else.component.html',
  styleUrls: ['./if-else.component.scss']
})
export class IfElseComponent {


  display = true ;

  hide(){

    this.display = false ;


  }

  show(){

    this.display = true ;
  }
  toggle(){

    this.display = !this.display ;
  }



  //----------------------------Else IF---------------------------


  color = "red";

  showColor(val:string){

    if(val == 'red'){
       this.color = 'red'
       console.log(this.color);


    }else if(val == 'purple'){
       this.color = 'purple'

    }else if(val == 'green'){

      this.color = 'green'
    }else{

      this.color = 'yellow'
    }




  }

  //--------------------Switch case --------------------


  status = 'success';

showStatus(val:string){

    if(val == 'success'){
       this.status = 'success'



    }else if(val == 'warning'){
       this.status = 'warning'

    }else{

      this.status = 'error'
    }




  }



}
