import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { StudentsDetailsComponent } from './Components/students-details/students-details.component';
import { ErrorComponent } from './Components/error/error.component';
import { AddStudentComponent } from './Components/add-student/add-student.component';

export const routes: Routes = [
    {path:"", component: HomeComponent},
    {path:"home", component: HomeComponent},
    {path:"students/:id", component: StudentsDetailsComponent},
    {path:"addStudent", component: AddStudentComponent},
    {path:"**",component: ErrorComponent},
];
