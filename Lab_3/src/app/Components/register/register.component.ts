import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  userName = "";
  userAge = "";

  @Output() dataEvent = new EventEmitter();
  saveData() 
  {
    if (this.isValidUsername() && this.isValidAge()) 
      {
      let userData = { userName: this.userName, userAge: +this.userAge };
      this.dataEvent.emit(userData);
      this.userName = "";
      this.userAge = "";
    }
  }

  private isValidUsername(): boolean 
  {
    return this.userName.length >= 3;
  }

  private isValidAge(): boolean 
  {
    let age = +this.userAge;
    return !isNaN(age) && age >= 10 && age <= 30;
  }
}
