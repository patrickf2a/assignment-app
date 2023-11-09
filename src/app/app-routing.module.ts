import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssignmentsComponent } from './assignments/assignments.component';
import { AssignmentDetailComponent } from './assignments/assignment-detail/assignment-detail.component';
import { AddAssignmentComponent } from './assignments/add-assignment/add-assignment.component';
import { EditAssignmentComponent } from './assignments/edit-assignment/edit-assignment.component';
import { authGuard } from './shared/auth.guard';

const routes: Routes = [
  { path: 'home',component: AssignmentsComponent },
  { path: 'assignment', component: AssignmentsComponent },
  { path: 'assignment/:id', component: AssignmentDetailComponent },
  { path: 'add-assignment', component: AddAssignmentComponent },
  { path: 'assignment/:id/edit',
    component: EditAssignmentComponent,
    canActivate:[authGuard] },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
