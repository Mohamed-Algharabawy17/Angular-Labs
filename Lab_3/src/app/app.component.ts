import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RegisterComponent } from './Components/register/register.component';
import { UsersComponent } from './Components/users/users.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RegisterComponent,
    UsersComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent 
{

  userData:{userName: string, userAge: string} = { userName: "", userAge: "" };
  allUsersData:{userName: string, userAge: string}[] = []; 

  getUserData(data: any) 
  {
    // console.log(data);
    this.userData = data;
    this.allUsersData.push(this.userData);
    console.log(this.allUsersData);
    
  }
}
