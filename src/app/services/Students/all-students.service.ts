import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from '../base.service';

@Injectable({
  providedIn: 'root'
})
export class AllStudentsService extends BaseService {
endPoint:"alumno/mostrarTodo";
  constructor(private http: HttpClient) {
    super();
   }
   getAll():Observable<any>{
    return this.http.get("http://localhost/api-escuela/alumno/mostrarTodo");
   }
   
}
