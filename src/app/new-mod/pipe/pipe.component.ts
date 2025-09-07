import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.scss']
})
export class PipeComponent {

  title = "The pipes of angular"
  name = 'fahim faiyaz'
  nickname = 'FAHIM'
  date = new Date();
  amount = 10 ;

  amount2 = 20 ;

}
