import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/Students.model';
import { AllStudentsService } from 'src/app/services/Students/all-students.service';

@Component({
  selector: 'app-students-by-id',
  templateUrl: './students-by-id.component.html',
  styleUrls: ['./students-by-id.component.css']
})
export class StudentsByIdComponent implements OnInit {


  ngOnInit(): void {
  }

}
