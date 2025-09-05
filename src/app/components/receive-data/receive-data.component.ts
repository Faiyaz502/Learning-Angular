import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-receive-data',
  templateUrl: './receive-data.component.html',
  styleUrls: ['./receive-data.component.scss']
})
export class ReceiveDataComponent implements OnInit {

  constructor(private route : ActivatedRoute){}

  userName : any ;
  fullName : any ;
  ngOnInit(): void {

    this.route.queryParams.subscribe((param)=>{

      console.log(param);
        this.userName = param['name'];

    })

    this.route.data.subscribe((data)=>{

      this.fullName = data['name']

    })


  }




}
