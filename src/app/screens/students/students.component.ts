import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/getStudents.model';
import { AllStudentsService } from 'src/app/services/Students/all-students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  studentList:Student[];
  constructor( private allStudenService:AllStudentsService) {
  this.allStudenService.getAll().subscribe(
    data=>{
      this.studentList=data.body;
  
   console.log(data.body);
   console.log(data.body[10].Control);   },
      error=>{
        console.log(error);
      }
      );
 

   }
  ngOnInit(): void {
  }

}
