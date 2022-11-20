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
      Question_21: ['', Validators.required],

      Email: ['', Validators.compose([Validators.required, Validators.email])],
      StudentName: ['', Validators.compose([])],
      Organization_Name: ['', Validators.compose([])],
      Organization_Position: ['', Validators.compose([])],
      Graduation_year: ['', Validators.compose([])],
    });

    this.userName = this.SurveyForm.value.Email;
    console.log('userName', this.userName);
  }
  onSubmit() {
    var servey: User = this.SurveyForm.value;

    this.serveyService.Student_Servey(servey).subscribe((res) => {
      console.log('res', res);
    });
    this.SurveyForm.reset();
    console.log(this.surveyData);
    alert('Survey Submit Successfully');
  }

  isLogin() {
    this.route.navigate(['/AdminLogin']);
  }

  get email(): FormGroup {
    return this.SurveyForm.get('Email') as FormGroup;
  }
}
