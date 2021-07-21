import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormStudentsService } from 'src/app/services/Students/form-students.service';

@Component({
  selector: 'app-form-students',
  templateUrl: './form-students.component.html',
  styleUrls: ['./form-students.component.css']
})
export class FormStudentsComponent implements OnInit {
   formStudents: FormGroup;
 
  constructor(private formBuilder: FormBuilder,  private formStudentServices:FormStudentsService) { 
    
  }
 
  ngOnInit(): void {
    this.formStudents = this.formBuilder.group({
      num_control:['',[Validators.required]],
      nombre_alumno:['',[Validators.required]],
      clave_carrera:['',Validators.required],
      esta_inscrito:[0,Validators.required,Validators]
     
    });
  }
  submitStudents():void{
    console.log(this.formStudents.value);
    this.formStudentServices.newStudent(this.formStudents.value)
    .subscribe(data=>{
      console.log(data);
    },
      error=>{
        console.log(error);
      }
      );
      //this.formStudentServices.hola();
  }

}
