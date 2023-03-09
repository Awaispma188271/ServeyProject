import { EmployerCommentsComponent } from './AdminPannel/employer-comments/employer-comments.component';
import { StudentCommentsComponent } from './AdminPannel/student-comments/student-comments.component';
import { SubmittedComponent } from './Model/submitted/submitted.component';
import { StudentChartComponent } from './AdminPannel/student-chart/student-chart.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './AdminPannel/admin/admin.component';
import { AuthGuard } from './auth.guard';
import { MainPageComponent } from './main-page/main-page.component';
import { EmployeeSurveyComponent } from './Model/employee-survey/employee-survey.component';
import { LoginComponent } from './Model/login/login.component';
import { SurveyComponent } from './Model/survey/survey.component';
import { StudentResponseComponent } from './AdminPannel/student-response/student-response.component';
import { EmployeeChartComponent } from './AdminPannel/employee-chart/employee-chart.component';
import { EmployeeResponseComponent } from './AdminPannel/employee-response/employee-response.component';
import { ChartComponent } from './chart/chart.component';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
  },
  {
    path: 'Survey-Submitted',
    component: SubmittedComponent,
  },
  {
    path: 'Student-Survey',
    component: SurveyComponent,
  },
  {
    path: 'Student-Comments',
    component: StudentCommentsComponent,
  },
  {
    path:'Employer-Comments',
    component:EmployerCommentsComponent
  },
  {
    path: 'Employee-Survey',
    component: EmployeeSurveyComponent,
  },
  {
    path: 'AdminLogin',
    component: LoginComponent,
  },
  {
    path: 'student-Response',
    component: StudentResponseComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'student-chart',
    component: StudentChartComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'chart',
    component: ChartComponent,
    
  },
  {
    path: 'employee-Response',
    component: EmployeeResponseComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'employee-chart',
    component: EmployeeChartComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'Admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
