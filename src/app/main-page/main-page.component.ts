import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  studentServey(){
    this.router.navigate(['/Student-Survey']);
  }
  employeeServey(){
    this.router.navigate(['/Employee-Survey']);
  }
  admin(){
    this.router.navigate(['/Admin']);
  }
  isLogin(){
    this.router.navigate(['/AdminLogin']);
  }

}
