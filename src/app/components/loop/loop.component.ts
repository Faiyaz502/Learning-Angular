import { Component } from '@angular/core';

@Component({
  selector: 'app-loop',
  templateUrl: './loop.component.html',
  styleUrls: ['./loop.component.scss']
})
export class LoopComponent {


  users= ['Fahim','Anil','Peter','Bruce','Tony'];

  students = [

    {name : 'Anil' , age : 20 },
    {name : 'Fahim' , age : 26 },
    {name : 'Peter' , age : 33 },
    {name : 'Tony' , age : 40 }
  ]



}
