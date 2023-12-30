import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssignmentsComponent } from './assignments/assignments.component';
import { AssignmentDetailComponent } from './assignments/assignment-detail/assignment-detail.component';
import { AddAssignmentComponent } from './assignments/add-assignment/add-assignment.component';
import { EditAssignmentComponent } from './assignments/edit-assignment/edit-assignment.component';
import { LoginComponent } from './assignments/login/login.component';
import {CreateAccountComponent} from "./assignments/create-account/create-account.component";

const routes: Routes = [
  { path: 'home',component: AssignmentsComponent },
  { path: 'assignment', component: AssignmentsComponent },
  { path: 'assignment/:id', component: AssignmentDetailComponent },
  { path: 'add-assignment', component: AddAssignmentComponent },
  { path: 'assignment/:id/edit',
    component: EditAssignmentComponent },
  { path: 'login', component: LoginComponent },
  { path: 'create-account', component: CreateAccountComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
