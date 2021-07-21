import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from '../base.service';

@Injectable({
  providedIn: 'root'
})
export class FormStudentsService extends BaseService{
  endPoint='alumno/registrar';


  constructor(private http: HttpClient) { 
    super();
  }
  newStudent(body:any):Observable<any>{
   
    return this.http.post(this.URL+"/"+this.endPoint,body);
  }
  

}
