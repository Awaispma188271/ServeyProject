import { User } from './../../sharedServices/servey-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServeyServiceService } from '../../sharedServices/servey-service.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  public Students!: any;
  //public IsApproved!: boolean;
  fileName = 'ExcelSheet.xlsx';
  id: any='';
  constructor(
    private serveyService: ServeyServiceService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.id = this.serveyService.getDecodedToken();
  }

  studentChart() {
    this.route.navigate(['/student-chart']);
  }
  studentRes() {
    this.route.navigate(['/student-Response']);
  }
  employeeRes() {
    this.route.navigate(['/employee-Response']);
  }

  isLogout() {
    this.serveyService.isLogOut();
  }
}
