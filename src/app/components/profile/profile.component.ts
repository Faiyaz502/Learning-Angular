import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private route : ActivatedRoute , private router : Router){



  }

  userName : any ;

  ngOnInit(): void {

      const name = this.route.snapshot.paramMap.get('name');

      console.log(name);

      this.userName = name ;






  }

  sendData(){


 this.router.navigate(['rec'],{queryParams:{name : this.userName}})

  }







}
