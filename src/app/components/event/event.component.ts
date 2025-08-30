import { Component } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent {

  Click(event : any){

    console.log(event);

    console.log(event.target);
    console.log(event.target.classList.value);
    console.log(event.target.name);

    console.log(event.type);



  }

  focusBlur(event : Event){

    console.log(event.type);


  }


  mouseOver(event : MouseEvent){
    console.log("MouseOVer FUnction Triggered");

    console.log(event.target);




  }

  inputEvent(event : Event){

    console.log(event.type);
    console.log((event.target as HTMLInputElement).value);



  }


  //Get set the input field-------------------------------



  name = "";
  displayName = "";
  Fname = "Fahim Faiyaz"
  email = "";

  getName(event : Event){


    this.name = (event.target as HTMLInputElement).value;


  }

  display(){

    this.displayName = this.name;

  }
  setName(){

    this.name = this.Fname;
  }


  //--------------------

  getEmail(val:string){

    console.log(val);
    this.email = val ;


  }
  setEmail(){

    this.email = "fahim@gmail.com"


  }










}
