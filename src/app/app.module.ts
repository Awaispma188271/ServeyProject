import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SurveyComponent } from './Model/survey/survey.component';
import { AdminComponent } from './AdminPannel/admin/admin.component';
import { LoginComponent } from './Model/login/login.component';
import { ChartComponent } from './chart/chart.component';
import { MainPageComponent } from './main-page/main-page.component';
import { EmployeeSurveyComponent } from './Model/employee-survey/employee-survey.component';
import { StudentResponseComponent } from './AdminPannel/student-response/student-response.component';
import { StudentChartComponent } from './AdminPannel/student-chart/student-chart.component';
import { EmployeeResponseComponent } from './AdminPannel/employee-response/employee-response.component';
import { EmployeeChartComponent } from './AdminPannel/employee-chart/employee-chart.component';
//import { NgxChartModule } from 'ngx-chart';


@NgModule({
  declarations: [
    AppComponent,
    SurveyComponent,
    AdminComponent,
    LoginComponent,
    ChartComponent,
    MainPageComponent,
    EmployeeSurveyComponent,
    StudentResponseComponent,
    StudentChartComponent,
    EmployeeResponseComponent,
    EmployeeChartComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule,
    CommonModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
