import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { StudentService } from '../../Services/student.service';

@Component({
  selector: 'app-add-student',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers:[
    StudentService
  ],
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.css'
})
export class AddStudentComponent {


  constructor(private stdService: StudentService){}


  /******************************* Form Validation ***************************/
  validation = new FormGroup({
    name: new FormControl("", [Validators.minLength(5), Validators.required]),
    username: new FormControl("", [Validators.minLength(4), Validators.required]),
    age: new FormControl("", [Validators.min(20), Validators.max(40), Validators.required]),
    email: new FormControl("", [Validators.email, Validators.required]),
    phone: new FormControl("", [Validators.required, Validators.minLength(1)]),
  })
  

  get validName(){
    return this.validation.controls["name"].valid;
  }

  get validUserName(){
    return this.validation.controls["username"].valid;
  }
  get validAge(){
    return this.validation.controls["age"].valid;
  }
  get validEmail(){
    return this.validation.controls["email"].valid;
  }

  get validPhone(){
    return this.validation.controls["phone"].valid;
  }

  sendStudentData(name:any,username:any, age:any, email:any, phone:any)
  {

    if(this.validation.valid)
    {
      let studentData = {name,username, age, email, phone};
      this.stdService.addNewStudent(studentData).subscribe(
        () => {
          alert("Your data added successfully :)");
          this.validation.reset();
        },
        error => {
          console.error('Error adding student:', error);
          alert("An error occurred while adding the studen, Please try again later.");
        }
      );
    }
  }

}
