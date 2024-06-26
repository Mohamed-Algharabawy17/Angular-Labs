import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent 
{
    @Input() allUsersData: { userName: string, userAge: string }[] = [];
}
