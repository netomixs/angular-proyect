import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormStudentsComponent } from './screens/form-students/form-students.component';
import { StudentsComponent } from './screens/students/students.component';
import { StudentsByIdComponent } from './screens/students-by-id/students-by-id.component';
const routes: Routes = [
  {
    path: 'form',
    component: FormStudentsComponent,
  },
  {
    path: 'students',
    component: StudentsComponent
  },
  {
    path: 'students-by-id',
    component: StudentsByIdComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'form'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
