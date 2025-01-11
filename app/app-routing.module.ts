import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ProfileComponent} from "./profile/profile.component";
import {LoginComponent} from "./login/login.component";
import {LoadEmployesComponent} from "./load-employes/load-employes.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {AbsenceComponent} from "./absence/absence.component";
import {AdminTemplateComponent} from "./admin-template/admin-template.component";
import {LoadAbsencesComponent} from "./load-absences/load-absences.component";
import {EmployeComponent} from "./employe/employe.component";
import {EmployeDetailsComponent} from "./employe-details/employe-details.component";
import {NewAbsenceComponent} from "./new-absence/new-absence.component";
import {AbsenceDetailsComponent} from "./absence-details/absence-details.component";

const routes: Routes = [
  {path :"",component :LoginComponent},
  {path :"login",component :LoginComponent},
  {path :"admin",component :AdminTemplateComponent,children:[
      {path :"home",component :HomeComponent},
      {path :"profile",component :ProfileComponent},
      {path :"loadEmployes",component :LoadEmployesComponent},
      {path :"loadAbsences",component :LoadAbsencesComponent},
      {path :"dashboard",component :DashboardComponent},
      {path :"employes",component :EmployeComponent},
      {path :"absences",component :AbsenceComponent},
      {path :"employe-details/:code",component :EmployeDetailsComponent},
      {path :"new-absence/:employeCode",component :NewAbsenceComponent},
      {path :"absence-details/:id",component :AbsenceDetailsComponent}
    ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
