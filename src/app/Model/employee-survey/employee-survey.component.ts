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
  isContinue: boolean = false;
  isSurvey: boolean = true;

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
      //Evaluator Information
      EvaluatorName: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('[a-zA-Z].*'),
        ]),
      ],
      Designation_Evaluator: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('[a-zA-Z].*'),
        ]),
      ],
      Organization_Name: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('[a-zA-Z].*'),
        ]),
      ],
      Contact_no: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('^[0-9]{11}$'),
        ]),
      ],
      Email: ['', Validators.compose([Validators.required, Validators.email])],
      //Graduate Information
      EmployerName: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('[a-zA-Z].*'),
        ]),
      ],
      Designation_Employer: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('[a-zA-Z].*'),
        ]),
      ],
      Registration_no: ['', Validators.compose([Validators.required])],
      Job_Level: ['', Validators.compose([])],
      Department: ['', Validators.compose([])],
      Comments: ['', Validators.compose([])],
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
    this.route.navigate(['/Survey-Submitted']);
  }

  isLogin() {
    this.route.navigate(['/AdminLogin']);
  }
  Continue() {
    this.isContinue = true;
    this.isSurvey = false;
  }

  get name(): FormGroup {
    return this.EmployeeSurveyForm.get('EvaluatorName') as FormGroup;
  }
  get regis(): FormGroup {
    return this.EmployeeSurveyForm.get('Registration_no') as FormGroup;
  }
  get designation_Evaluator(): FormGroup {
    return this.EmployeeSurveyForm.get('Designation_Evaluator') as FormGroup;
  }
  get Organization_Name(): FormGroup {
    return this.EmployeeSurveyForm.get('Organization_Name') as FormGroup;
  }
  get EmployerName(): FormGroup {
    return this.EmployeeSurveyForm.get('EmployerName') as FormGroup;
  }
  get Designation_Employer(): FormGroup {
    return this.EmployeeSurveyForm.get('Designation_Employer') as FormGroup;
  }
  get email(): FormGroup {
    return this.EmployeeSurveyForm.get('Email') as FormGroup;
  }
  get mobileNo(): FormGroup {
    return this.EmployeeSurveyForm.get('Contact_no') as FormGroup;
  }
}
