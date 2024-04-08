import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-students-details',
  standalone: true,
  imports: [],
  templateUrl: './students-details.component.html',
  styleUrl: './students-details.component.css'
})
export class StudentsDetailsComponent {
  id = 0;
  constructor(route: ActivatedRoute)
  {
      this.id = route.snapshot.params['id'];
  }
}
