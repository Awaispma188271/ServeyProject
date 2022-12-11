import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {
  ServeyServiceService,
  User,
} from 'src/app/sharedServices/servey-service.service';

@Component({
  selector: 'app-employee-survey',
  templateUrl: './employee-survey.component.html',
  styleUrls: ['./employee-survey.component.css'],
  providers: [ServeyServiceService],
})
export class EmployeeSurveyComponent implements OnInit {
  public EmployeeSurveyForm!: FormGroup;
  userName: string = '';
  surveyData: any[] = [];
  Email: string = '';
  value: any;
  isContinue:boolean=false;
  isSurvey:boolean=true;


  constructor(
    private serveyService: ServeyServiceService,
    private formBuilder: FormBuilder,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.EmployeeSurveyForm = this.formBuilder.group({
      // gender: ['', Validators.required],
      Question_1: ['', Validators.required],
      Question_2: ['', Validators.required],
      Question_3: ['', Validators.required],
      Question_4: ['', Validators.required],
      Question_5: ['', Validators.required],
      Question_6: ['', Validators.required],
      Question_7: ['', Validators.required],
      Question_8: ['', Validators.required],
      Question_9: ['', Validators.required],
      Question_10: ['', Validators.required],
      Question_11: ['', Validators.required],
      Question_12: ['', Validators.required],
      Question_13: ['', Validators.required],
      Question_14: ['', Validators.required],
      Question_15: ['', Validators.required],
      Question_16: ['', Validators.required],
      Question_17: ['', Validators.required],
      Question_18: ['', Validators.required],
      Question_19: ['', Validators.required],

      Email: ['', Validators.compose([Validators.required, Validators.email])],
      Organization_Name: ['', Validators.compose([])],
      Department: ['', Validators.compose([])],
      Contact_no: ['', Validators.compose([])],
      Bussiness_Type: ['', Validators.compose([])],
      NoOfGraduate: ['', Validators.compose([])],
    });

    this.userName = this.EmployeeSurveyForm.value;
    console.log('userName', this.userName);
  }
  onSubmit() {
    var servey: User = this.EmployeeSurveyForm.value;

    this.serveyService.Employee_Servey(servey).subscribe((res) => {
      console.log('res', res);
    });
    this.EmployeeSurveyForm.reset();
    console.log(this.surveyData);
    alert('Survey Submit Successfully');
  }

  isLogin() {
    this.route.navigate(['/AdminLogin']);
  }
  Continue(){
    this.isContinue=true;
    this.isSurvey=false;
  }

  get email(): FormGroup {
    return this.EmployeeSurveyForm.get('Email') as FormGroup;
  }
}
