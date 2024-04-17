import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { StudentService } from '../../Services/student.service';
import { SingleStudentComponent } from '../single-student/single-student.component';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    HttpClientModule,
    SingleStudentComponent,
    RouterModule,
    MatButtonModule,  
    MatIconModule,
  ],
  providers:[StudentService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  constructor(private stdService:StudentService){}

  stdData:any;
  coloor = "ligthgreen";
  
  ngOnInit(): void {
     this.stdService.getStudentsData().subscribe({
      next: (data)=>{
        this.stdData = data
      },
      error: (err) => {console.log(`Error fetching data: ${err}`);
      }
    })
  }

}
