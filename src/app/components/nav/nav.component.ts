import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  key = "";

  keyUphandler(event : KeyboardEvent){

      console.log(`user Pressed ${event.key}`);

      this.key = event.key;
      


  }

}
