import {
  ServeyServiceService,
  User,
} from './../../sharedServices/servey-service.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css'],
  providers: [ServeyServiceService],
})
export class SurveyComponent implements OnInit {
  public SurveyForm!: FormGroup;
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
    this.SurveyForm = this.formBuilder.group({
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
      Question_20: ['', Validators.required],
      StudentName: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('[a-zA-Z].*'),
        ]),
      ],
      Registration_no: ['', Validators.compose([Validators.required])],
      CNIC_no: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('^[0-9]{13}$'),
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
      Employment_Status: ['', Validators.compose([])],
      Organization_Name: ['', Validators.compose([])],
      Organization_Position: ['', Validators.compose([])],
      Department: ['', Validators.compose([])],
      Comments: ['', Validators.compose([])],
    });
  }
  onSubmit() {
    var servey: User = this.SurveyForm.value;

    this.serveyService.Student_Servey(servey).subscribe((res) => {
      console.log('res', res);
    });
    this.SurveyForm.reset();
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
    return this.SurveyForm.get('StudentName') as FormGroup;
  }
  get regis(): FormGroup {
    return this.SurveyForm.get('Registration_no') as FormGroup;
  }
  get cnicNo(): FormGroup {
    return this.SurveyForm.get('CNIC_no') as FormGroup;
  }
  get email(): FormGroup {
    return this.SurveyForm.get('Email') as FormGroup;
  }
  get mobileNo(): FormGroup {
    return this.SurveyForm.get('Contact_no') as FormGroup;
  }
}
