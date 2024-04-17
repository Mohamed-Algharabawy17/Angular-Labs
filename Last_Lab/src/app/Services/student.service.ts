import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient){}

  DB_Config = "http://localhost:3000/students";

  getStudentsData()
  {
      return this.http.get(this.DB_Config)
  }

  addNewStudent(std:any)
  {
      return this.http.post(this.DB_Config,std)
  }

  getStudentById(id:number)
  {
      return this.http.get(this.DB_Config+'/'+id);
  }

  updateStudentById(id:number,std:any)
  {
      return this.http.put(this.DB_Config+"/"+id,std);
  }

  deleteStudentById(id:number)
  {
      return this.http.delete(this.DB_Config+"/"+id);
  }  

}
