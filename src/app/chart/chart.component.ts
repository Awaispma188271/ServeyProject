import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ServeyServiceService } from '../sharedServices/servey-service.service';
import { StudentChartService } from '../sharedServices/student-chart.service';

//import CanvasJS from 'canvasjs';
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
  providers:[ServeyServiceService,StudentChartService]
})
export class ChartComponent implements OnInit {


 single!: any[];
 view: [number,number] = [700, 400];

 constructor(private _weather: StudentChartService, private route: Router){}
 ngOnInit(): void {
  //  this._weather.question1().subscribe(res =>{
  //   this.single=res;
    
  //  })
 }
 // options
 gradient: boolean = true;
 showLegend: boolean = true;
 showLabels: boolean = true;
 isDoughnut: boolean = false;
 legendPosition: string = 'below';

 colorScheme= {
 
   

    
   domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA','#C7B42C'],

 };


}