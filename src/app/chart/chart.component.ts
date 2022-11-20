import { Component, OnInit } from '@angular/core';
import * as CanvasJS from 'canvasjs';
import { ServeyServiceService } from '../sharedServices/servey-service.service';

import { ChartOptions, ChartType } from 'chart.js';
import { ActivatedRoute } from '@angular/router';
//import CanvasJS from 'canvasjs';
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
  providers:[ServeyServiceService]
})
export class ChartComponent implements OnInit {

 constructor(){}
 ngOnInit(): void {
   
 }
  // empty = false;
  // goodCt: number = 0;
  // badCt: number = 0;
  // mediumCt: number = 0;
  // excellentCt: number = 0;
  // public appName = '';
  // public fits: any | undefined;
  // public pieChartOptions: ChartOptions = {
  //   responsive: true,
  //   title: {
  //     text: 'Rated Fit',
  //     display: true
  //   },
  //   tooltips: {
  //     enabled: true,
  //     mode: 'single',
  //     callbacks: {
  //       label: this.showPercent
  //     }
  //   }
  // };
  // public pieChartLabels: Label[] = ['Bad', 'Medium', 'Good', 'Excellent'];
  // public pieChartData: any = [{data: []}];
  // public pieChartType: ChartType = 'pie';
  // public pieChartLegend = true;
  // public pieChartPlugins: any;
  // public pieChartColors: any = [
  //   { 
  //   backgroundColor: ['rgba(248,9,7,1)', 'rgba(248, 154, 7, 1)', 'rgba(7, 121, 248, 1)', 'rgba(90, 201, 40, 1)' ,
  //     'rgba(102,51,153,1)']
  //   }
  // ];

  // surveyAnswers: SurveyDetail[] = [];

  // // Second chart ===============================================================================
  // b1: string[] | undefined;
  // public chartOptB1: ChartOptions = {
  //   responsive: true,
  //   title: {
  //     text: "desc1",
  //     display: true
  //   },
  //   tooltips: {
  //     enabled: true,
  //     mode: 'single',
  //     callbacks: {
  //       label: this.showPercent
  //     }
  //   }
  // };
  // answersB1 = ['Ineffective', 'Somewhat Effective', 'Effective', 'Highly Effective', 'Exceptional'];
  // public chartLabelsB1: Label[] = this.answersB1
  // public chartDataB1: any = [{data: []}];

  // // Third Chart ============================================================================
  // b2: string[] | undefined;
  // public chartOptB2: ChartOptions = {
  //   responsive: true,
  //   title: {
  //     text: "desc2",
  //     display: true
  //   },
  //   tooltips: {
  //     enabled: true,
  //     mode: 'single',
  //     callbacks: {
  //       label: this.showPercent
  //     }
  //   }
  // };
  // answersB2 = ['Irrelevant', 'Somewhat Relevant', 'Relevant', 'Very Relevant', 'Proactive'];
  // public chartLabelsB2: Label[] = this.answersB2;
  // public chartDataB2: any = [{data: []}];

  // // Fourth Chart =============================================================

  // b3: string[] | undefined;
  // public chartOptB3: ChartOptions = {
  //   responsive: true,
  //   title: {
  //     text: "desc3",
  //     display: true
  //   },
  //   tooltips: {
  //     enabled: true,
  //     mode: 'single',
     
  //   }
  // };
  // answersB3 = ['Very Complex', 'Complex', 'Reasonable', 'Simple', 'Very Simple'];
  // public chartLabelsB3: Label[] = this.answersB3;
  // public chartDataB3: any = [{data: []}];

  // // Fifth Chart ==============================================================================

  // b4: string[] | undefined;
  // public chartOptB4: ChartOptions = {
  //   responsive: true,
  //   title: {
  //     text: "desc4",
  //     display: true
  //   },
  //   tooltips: {
  //     enabled: true,
  //     mode: 'single',
  //     // callbacks: {
  //     //   label: this.showPercent
  //     // }
  //   }
  // };
  // answersB4 = ['Sporadic', 'Infrequent', 'Frequent', 'Routine', 'Constant'];
  // public chartLabelsB4: Label[] = this.answersB4;
  // public chartDataB4: any = [{data: []}];

  // // 6th Chart =========================================================

  // b5: string[] | undefined;
  // public chartOptB5: ChartOptions = {
  //   responsive: true,
  //   title: {
  //     text: "desc5",
  //     display: true
  //   },
  //   tooltips: {
  //     enabled: true,
  //     mode: 'single',
  //     callbacks: {
  //       label: this.showPercent
  //     }
  //   }
  // };
  // answersB5 = ['Difficult', 'Operable', 'Usable', 'Intuitive', 'Streamlined'];
  // public chartLabelsB5: Label[] = this.answersB5;
  // public chartDataB5: any = [{data: []}];
  
  // // 7th Chart =========================================================

  // b6: string[] | undefined;
  // public chartOptB6: ChartOptions = {
  //   responsive: true,
  //   title: {
  //     text: "desc6",
  //     display: true
  //   },
  //   tooltips: {
  //     enabled: true,
  //     mode: 'single',
  //     // callbacks: {
  //     //   label: this.showPercent
  //     // }
  //   }
  // };
  // answersB6 = ['Poor', 'Tolerant', 'Sufficient', 'Excellent', 'Exceptional'];
  // public chartLabelsB6: Label[] = this.answersB6;
  // public chartDataB6: any = [{data: []}];
  

  // constructor(private route: ActivatedRoute,
  //             private service: ServeyServiceService
  //   ) {
  //     monkeyPatchChartJsTooltip();
  //     monkeyPatchChartJsLegend();
  //    }

  // ngOnInit(): void {
  //   this.getFits();
  //   // this.getAnswers();
  //   this.route.queryParams
  //   .subscribe(params => {
  //     console.log(params);
  //     this.appName = params['appName'];
  //   }
  // );
  // }

  // getFits(): void {
  //   const appId = String(this.route.snapshot.paramMap.get('appId'));
  //   this.service.getStudentRes().subscribe({
  //     next: response => {
  //       this.fits = response;

  //       if (this.fits.length === 0) {
  //         this.empty = true;
  //       }
        
  //       this.fits.forEach((current: string) => {
  //         if (current === 'GOOD') {
  //           this.goodCt++;
  //         } else if (current === 'MEDIUM') {
  //           this.mediumCt++;
  //         } else if (current === 'BAD') {
  //           this.badCt++;
  //         } else if (current === 'EXCELLENT') {
  //           this.excellentCt++;
  //         }
  //       });
  //       this.pieChartData =  [this.badCt, this.mediumCt, this.goodCt, this.excellentCt];
  //     }
  //   });
  // }

  // showPercent(tooltipItem: Chart.ChartTooltipItem, data: Chart.ChartData) {
  //   var allData = data.datasets[tooltipItem.datasetIndex].data;
  //   var tooltipLabel = data.labels[tooltipItem.index];
  //   var tooltipData = allData[tooltipItem.index];
  //   var sum = 0 
  //   allData.forEach(elem => {
  //     sum += +elem;
  //   });
  //   var percent = Math.round(+tooltipData*100/sum);
  //   return tooltipLabel + ": " + tooltipData + " (" + percent + "%)";
  // }

  // getAnswers() {
  //   const appId = String(this.route.snapshot.paramMap.get('appId'));
  //   this.service.getAllAnswers(appId).subscribe(
  //     response => {
  //       this.surveyAnswers = response;
  //       this.makeB1();
  //       this.makeB2();
  //       this.makeB3();
  //       this.makeB4();
  //       this.makeB5();
  //     }
  //   );

  // }

  // makeB1(): void {
  //   var ct1 = 0;
  //   var ct2 = 0;
  //   var ct3 = 0;
  //   var ct4 = 0;
  //   var ct5 = 0;
  //   this.surveyAnswers.forEach(
  //     entry => {
  //       if (entry.b1 === this.answersB1[0]) {
  //         ct1++;
  //       } else if (entry.b1 === this.answersB1[1]) {
  //         ct2++;
  //       } else if (entry.b1 === this.answersB1[2]) {
  //         ct3++;
  //       } else if (entry.b1 === this.answersB1[3]) {
  //         ct4++;
  //       } else if (entry.b1 === this.answersB1[4]) {
  //         ct5++;
  //       }
  //     }
  //   );
  //   this.chartDataB1 = [ct1, ct2, ct3, ct4, ct5];
  // }

  // makeB2(): void {
  //   var ct1 = 0;
  //   var ct2 = 0;
  //   var ct3 = 0;
  //   var ct4 = 0;
  //   var ct5 = 0;
  //   this.surveyAnswers.forEach(
  //     entry => {
  //       if (entry.b2 === this.answersB2[0]) {
  //         ct1++;
  //       } else if (entry.b2 === this.answersB2[1]) {
  //         ct2++;
  //       } else if (entry.b2 === this.answersB2[2]) {
  //         ct3++;
  //       } else if (entry.b2 === this.answersB2[3]) {
  //         ct4++;
  //       } else if (entry.b3 === this.answersB2[4]) {
  //         ct5++;
  //       }
  //     }
  //   );
  //   this.chartDataB2 = [ct1, ct2, ct3, ct4, ct5];
  // }

  // makeB3() {
  //   var ct1 = 0;
  //   var ct2 = 0;
  //   var ct3 = 0;
  //   var ct4 = 0;
  //   var ct5 = 0;
  //   this.surveyAnswers.forEach(
  //     entry => {
  //       if (entry.b3 === this.answersB3[0]) {
  //         ct1++;
  //       } else if (entry.b3 === this.answersB3[1]) {
  //         ct2++;
  //       } else if (entry.b3 === this.answersB3[2]) {
  //         ct3++;
  //       } else if (entry.b3 === this.answersB3[3]) {
  //         ct4++;
  //       } else if (entry.b3 === this.answersB3[4]) {
  //         ct5++;
  //       }
  //     }
  //   );
  //   this.chartDataB3 = [ct1, ct2, ct3, ct4, ct5];
  // }

  // makeB4() {
  //   var ct1 = 0;
  //   var ct2 = 0;
  //   var ct3 = 0;
  //   var ct4 = 0;
  //   var ct5 = 0;
  //   this.surveyAnswers.forEach(
  //     entry => {
  //       if (entry.b4 === this.answersB4[0]) {
  //         ct1++;
  //       } else if (entry.b4 === this.answersB4[1]) {
  //         ct2++;
  //       } else if (entry.b4 === this.answersB4[2]) {
  //         ct3++;
  //       } else if (entry.b4 === this.answersB4[3]) {
  //         ct4++;
  //       } else if (entry.b4 === this.answersB4[4]) {
  //         ct5++;
  //       }
  //     }
  //   );
  //   this.chartDataB4 = [ct1, ct2, ct3, ct4, ct5];
  // }

  // makeB5() {
  //   var ct1 = 0;
  //   var ct2 = 0;
  //   var ct3 = 0;
  //   var ct4 = 0;
  //   var ct5 = 0;
  //   this.surveyAnswers.forEach(
  //     entry => {
  //       if (entry.b5 === this.answersB5[0]) {
  //         ct1++;
  //       } else if (entry.b5 === this.answersB5[1]) {
  //         ct2++;
  //       } else if (entry.b5 === this.answersB5[2]) {
  //         ct3++;
  //       } else if (entry.b5 === this.answersB5[3]) {
  //         ct4++;
  //       } else if (entry.b5 === this.answersB5[4]) {
  //         ct5++;
  //       }
  //     }
  //   );
  //   this.chartDataB5 = [ct1, ct2, ct3, ct4, ct5];
  // }

  // makeB6() {
  //   var ct1 = 0;
  //   var ct2 = 0;
  //   var ct3 = 0;
  //   var ct4 = 0;
  //   var ct5 = 0;
  //   this.surveyAnswers.forEach(
  //     entry => {
  //       if (entry.b6 === this.answersB6[0]) {
  //         ct1++;
  //       } else if (entry.b6 === this.answersB6[1]) {
  //         ct2++;
  //       } else if (entry.b6 === this.answersB6[2]) {
  //         ct3++;
  //       } else if (entry.b6 === this.answersB6[3]) {
  //         ct4++;
  //       } else if (entry.b6 === this.answersB6[4]) {
  //         ct5++;
  //       }
  //     }
  //   );
  //   this.chartDataB6 = [ct1, ct2, ct3, ct4, ct5];
  // }

}