import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddtaskComponent } from './addtask/addtask.component';
import { ViewtaskComponent } from './viewtask/viewtask.component';

const routes: Routes = [
  { path: '', redirectTo: '/add', pathMatch: 'full' },
  { path: 'add', component: AddtaskComponent },
  { path: 'view', component: ViewtaskComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
