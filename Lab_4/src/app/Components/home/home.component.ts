import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  validation = new FormGroup({
    name: new FormControl("", [Validators.minLength(3), Validators.required]),
    age: new FormControl("", [Validators.min(20), Validators.max(40), Validators.required]),
    email: new FormControl("", [Validators.email, Validators.required]),
  })
  

  get validName(){
    return this.validation.controls["name"].valid;
  }
  get validAge(){
    return this.validation.controls["age"].valid;
  }
  get validEmail(){
    return this.validation.controls["email"].valid;
  }

  studentData() {
    // console.log(this.validation);
    // console.log(this.validAge);
    
    
    if(this.validation.valid){
      alert(`Name: ${this.validation.value["name"]}\nAge: ${this.validation.value["age"]}\nEmail: ${this.validation.value["email"]}`);
    }
  }

}
