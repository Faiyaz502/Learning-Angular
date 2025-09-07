import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {


  profileForm = new FormGroup({

      name : new FormControl('',[Validators.required,]),
      password : new FormControl('',[Validators.required,Validators.minLength(5)]),
      email : new FormControl('',[Validators.required,Validators.email])


  });


  onSubmit(){
    console.log(this.profileForm.value);


}

setValue(){
      this.profileForm.setValue({

        name : 'Akib',
        password :' 12354351',
        email : 'www.akib212@gmail.com'

      })


}


getName(){

  return this.profileForm.get('name');


}
getEmail(){

  return this.profileForm.get('email');


}
getPass(){

  return this.profileForm.get('password');


}


}

