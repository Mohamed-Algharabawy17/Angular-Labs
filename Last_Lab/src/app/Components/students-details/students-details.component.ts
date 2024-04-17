import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { StudentService } from '../../Services/student.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button'; 
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-students-details',
  standalone: true,
  imports: [
    HttpClientModule,
    RouterModule,
    MatButtonModule,  
    MatIconModule,

  ],
  providers:[
    StudentService
  ],
  templateUrl: './students-details.component.html',
  styleUrl: './students-details.component.css'
})
export class StudentsDetailsComponent implements OnInit{

  ID:any;
  std:any;
  constructor(myRoute:ActivatedRoute,private router:Router, private stdService:StudentService)
  {
    this.ID = myRoute.snapshot.params["id"];
  }

  ngOnInit(): void {
    this.stdService.getStudentById(this.ID).subscribe({
      next:(data)=>{
        // console.log(data)
        if(data == null)
        {
          this.router.navigate(['/']);
        }
        this.std = data;
      },
      error:(err)=>{
        console.log("cannot get the student !!");
        this.router.navigate(['/error']);
      }
    })
  }

  deleteStudent(id: number) 
  {
    if (confirm('Are you sure you want to delete this student?'))
      {
        this.stdService.deleteStudentById(id).subscribe(
            () => {
              console.log('Student deleted successfully.');
              this.router.navigate(['/']);
            },
            error => {
              console.error('Error deleting student:', error);
            }
          );
      }
  }
}



