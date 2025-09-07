import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(private route : ActivatedRoute){}



  userName = "";
  id : number = 0 ;


ngOnInit(): void {


  this.route.params.subscribe((param)=>{

    this.userName = param['name'];
    this.id = param['id'];

  })

  }





}
