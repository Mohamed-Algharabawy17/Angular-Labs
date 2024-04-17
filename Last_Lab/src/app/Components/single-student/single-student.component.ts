import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-single-student',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './single-student.component.html',
  styleUrl: './single-student.component.css'
})
export class SingleStudentComponent {

  @Input() std:any;
}
