import { ServeyServiceService } from 'src/app/sharedServices/servey-service.service';
import { StudentResponseComponent } from './../student-response/student-response.component';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Chart, registerables } from 'chart.js';
import {
  StudentChartService,
  StudentResponse,
} from 'src/app/sharedServices/student-chart.service';

@Component({
  selector: 'app-student-chart',
  templateUrl: './student-chart.component.html',
  styleUrls: ['./student-chart.component.css'],
  providers: [StudentChartService],
})
export class StudentChartComponent implements OnInit {
  result: StudentResponse[] = [];
  points: StudentResponse[] = [];
  coinName: any;
  chart: any = [];
  chart2: any = [];
  chart3: any = [];
  chart4: any = [];
  chart5: any = [];
  chart6: any = [];
  chart7: any = [];
  chart8: any = [];
  chart9: any = [];
  chart10: any = [];
  chart11: any = [];
  chart12: any = [];
  chart13: any = [];
  chart14: any = [];
  chart15: any = [];
  chart16: any = [];
  chart17: any = [];
  chart18: any = [];
  chart19: any = [];
  chart20: any = [];
  chart21: any = [];
  chartdata: any;
  id: any;
  question_no: any;
  constructor(
    private _weather: StudentChartService,
    private route: Router,
    private serveyServiceService: ServeyServiceService
  ) {
    Chart.register(...registerables);
  }

  ngOnInit() {
    this.id = this.serveyServiceService.getDecodedToken();

    this._weather.question1(this.id).subscribe((res) => {
      var resp = res;

      var points: any = Object.values(resp);

      console.log('Q 1', points);

      this.chart = new Chart('canvas', {
        type: 'pie',
        data: {
          labels: ['Excelent', 'Good', 'Very_Good', 'Fair'],

          datasets: [
            {
              data: points,
              // borderColor: '#3e95cd',

              label: 'Question 1 Count',
              backgroundColor: [
                'rgb(22, 160, 133)',
                'rgb(255, 99, 132)',
                'rgb(255, 205, 86)',
                'rgb(142, 68, 173)',
                'rgb(142, 68, 233)',
              ],

              borderWidth: 3,
            },
          ],
        },
      });
    });

    this._weather.question2(this.id).subscribe((res) => {

      var resp = res;

      var point: any = Object.values(resp);

      console.log('Q 2', point);

      this.chart2 = new Chart('canvas2', {
        type: 'pie',
        data: {
          labels: ['Excelent', 'Good', 'Very_Good', 'Fair'],

          datasets: [
            {
              data: point,
              // borderColor: '#3e95cd',

              label: 'Question 2 Count',
              backgroundColor: [
                'rgb(22, 160, 133)',
                'rgb(255, 99, 132)',
                'rgb(255, 205, 86)',
                'rgb(142, 68, 173)',
                'rgb(142, 68, 233)',
              ],

              borderWidth: 3,
            },
          ],
        },
      });
    });

    this._weather.question3(this.id).subscribe((res) => {
      var resp = res;

      var point: any = Object.values(resp);

      console.log('Q 3', point);

      this.chart3 = new Chart('canvas3', {
        type: 'pie',
        data: {
          labels: ['Excelent', 'Good', 'Very_Good', 'Fair'],

          datasets: [
            {
              data: point,
              // borderColor: '#3e95cd',

              label: 'Question 3 Count',
              backgroundColor: [
                'rgb(22, 160, 133)',
                'rgb(255, 99, 132)',
                'rgb(255, 205, 86)',
                'rgb(142, 68, 173)',
                'rgb(142, 68, 233)',
              ],

              borderWidth: 3,
            },
          ],
        },
      });
    });
    //Question4

    this._weather.question4(this.id).subscribe((res) => {
      var resp = res;

      var point: any = Object.values(resp);

      console.log('Q 4', point);

      this.chart4 = new Chart('canvas4', {
        type: 'pie',
        data: {
          labels: ['Excelent', 'Good', 'Very_Good', 'Fair'],

          datasets: [
            {
              data: point,
              // borderColor: '#3e95cd',

              label: 'Question 4 Count',
              backgroundColor: [
                'rgb(22, 160, 133)',
                'rgb(255, 99, 132)',
                'rgb(255, 205, 86)',
                'rgb(142, 68, 173)',
                'rgb(142, 68, 233)',
              ],

              borderWidth: 3,
            },
          ],
        },
      });
    });

    //Question 5

    this._weather.question5(this.id).subscribe((res) => {
      var resp = res;

      var point: any = Object.values(resp);

      console.log('Q 5', point);

      this.chart5 = new Chart('canvas5', {
        type: 'pie',
        data: {
          labels: ['Excelent', 'Good', 'Very_Good', 'Fair'],

          datasets: [
            {
              data: point,
              // borderColor: '#3e95cd',

              label: 'Question 5 Count',
              backgroundColor: [
                'rgb(22, 160, 133)',
                'rgb(255, 99, 132)',
                'rgb(255, 205, 86)',
                'rgb(142, 68, 173)',
                'rgb(142, 68, 233)',
              ],

              borderWidth: 3,
            },
          ],
        },
      });
    });

    //Question 6

    this._weather.question6(this.id).subscribe((res) => {
      var resp = res;

      var point: any = Object.values(resp);

      console.log('Q 6', point);

      this.chart6 = new Chart('canvas6', {
        type: 'pie',
        data: {
          labels: ['Excelent', 'Good', 'Very_Good', 'Fair'],

          datasets: [
            {
              data: point,
              // borderColor: '#3e95cd',

              label: 'Question 6 Count',
              backgroundColor: [
                'rgb(22, 160, 133)',
                'rgb(255, 99, 132)',
                'rgb(255, 205, 86)',
                'rgb(142, 68, 173)',
                'rgb(142, 68, 233)',
              ],

              borderWidth: 3,
            },
          ],
        },
      });
    });
    //Question 7
    this._weather.question7(this.id).subscribe((res) => {
      var resp = res;

      var point: any = Object.values(resp);

      console.log('Q 7', point);

      this.chart7 = new Chart('canvas7', {
        type: 'pie',
        data: {
          labels: ['Excelent', 'Good', 'Very_Good', 'Fair'],

          datasets: [
            {
              data: point,
              // borderColor: '#3e95cd',

              label: 'Question 7 Count',
              backgroundColor: [
                'rgb(22, 160, 133)',
                'rgb(255, 99, 132)',
                'rgb(255, 205, 86)',
                'rgb(142, 68, 173)',
                'rgb(142, 68, 233)',
              ],

              borderWidth: 3,
            },
          ],
        },
      });
    });

    //Question 8

    this._weather.question8(this.id).subscribe((res) => {
      var resp = res;

      var point: any = Object.values(resp);

      console.log('Q 8', point);

      this.chart8 = new Chart('canvas8', {
        type: 'pie',
        data: {
          labels: ['Excelent', 'Good', 'Very_Good', 'Fair'],

          datasets: [
            {
              data: point,
              // borderColor: '#3e95cd',

              label: 'Question 8 Count',
              backgroundColor: [
                'rgb(22, 160, 133)',
                'rgb(255, 99, 132)',
                'rgb(255, 205, 86)',
                'rgb(142, 68, 173)',
                'rgb(142, 68, 233)',
              ],

              borderWidth: 3,
            },
          ],
        },
      });
    });

    //Question 9

    this._weather.question9(this.id).subscribe((res) => {
      var resp = res;

      var point: any = Object.values(resp);

      console.log('Q 9', point);

      this.chart9 = new Chart('canvas9', {
        type: 'pie',
        data: {
          labels: ['Excelent', 'Good', 'Very_Good', 'Fair'],

          datasets: [
            {
              data: point,
              // borderColor: '#3e95cd',

              label: 'Question 9 Count',
              backgroundColor: [
                'rgb(22, 160, 133)',
                'rgb(255, 99, 132)',
                'rgb(255, 205, 86)',
                'rgb(142, 68, 173)',
                'rgb(142, 68, 233)',
              ],

              borderWidth: 3,
            },
          ],
        },
      });
    });
    //Question 10

    this._weather.question10(this.id).subscribe((res) => {
      var resp = res;

      var point: any = Object.values(resp);

      console.log('Q 10', point);

      this.chart10 = new Chart('canvas10', {
        type: 'pie',
        data: {
          labels: ['Excelent', 'Good', 'Very_Good', 'Fair'],

          datasets: [
            {
              data: point,
              // borderColor: '#3e95cd',

              label: 'Question 10 Count',
              backgroundColor: [
                'rgb(22, 160, 133)',
                'rgb(255, 99, 132)',
                'rgb(255, 205, 86)',
                'rgb(142, 68, 173)',
                'rgb(142, 68, 233)',
              ],

              borderWidth: 3,
            },
          ],
        },
      });
    });
    //Question11

    this._weather.question11(this.id).subscribe((res) => {
      var resp = res;

      var point: any = Object.values(resp);

      console.log('Q 11', point);

      this.chart11 = new Chart('canvas11', {
        type: 'pie',
        data: {
          labels: ['Excelent', 'Good', 'Very_Good', 'Fair'],

          datasets: [
            {
              data: point,
              // borderColor: '#3e95cd',

              label: 'Question 11 Count',
              backgroundColor: [
                'rgb(22, 160, 133)',
                'rgb(255, 99, 132)',
                'rgb(255, 205, 86)',
                'rgb(142, 68, 173)',
                'rgb(142, 68, 233)',
              ],

              borderWidth: 3,
            },
          ],
        },
      });
    });

    //Question 12

    this._weather.question12(this.id).subscribe((res) => {
      var resp = res;

      var point: any = Object.values(resp);

      console.log('Q 12', point);

      this.chart12 = new Chart('canvas12', {
        type: 'pie',
        data: {
          labels: ['Excelent', 'Good', 'Very_Good', 'Fair'],

          datasets: [
            {
              data: point,
              // borderColor: '#3e95cd',

              label: 'Question 12 Count',
              backgroundColor: [
                'rgb(22, 160, 133)',
                'rgb(255, 99, 132)',
                'rgb(255, 205, 86)',
                'rgb(142, 68, 173)',
                'rgb(142, 68, 233)',
              ],

              borderWidth: 3,
            },
          ],
        },
      });
    });

    //Question13

    this._weather.question13(this.id).subscribe((res) => {
      var resp = res;

      var point: any = Object.values(resp);

      console.log('Q 13', point);

      this.chart13 = new Chart('canvas13', {
        type: 'pie',
        data: {
          labels: ['Excelent', 'Good', 'Very_Good', 'Fair'],

          datasets: [
            {
              data: point,
              // borderColor: '#3e95cd',

              label: 'Question 13 Count',
              backgroundColor: [
                'rgb(22, 160, 133)',
                'rgb(255, 99, 132)',
                'rgb(255, 205, 86)',
                'rgb(142, 68, 173)',
                'rgb(142, 68, 233)',
              ],

              borderWidth: 3,
            },
          ],
        },
      });
    });

    //Question 14

    this._weather.question14(this.id).subscribe((res) => {
      var resp = res;

      var point: any = Object.values(resp);

      console.log('Q 14', point);

      this.chart14 = new Chart('canvas14', {
        type: 'pie',
        data: {
          labels: ['Excelent', 'Good', 'Very_Good', 'Fair'],

          datasets: [
            {
              data: point,
              // borderColor: '#3e95cd',

              label: 'Question 14 Count',
              backgroundColor: [
                'rgb(22, 160, 133)',
                'rgb(255, 99, 132)',
                'rgb(255, 205, 86)',
                'rgb(142, 68, 173)',
                'rgb(142, 68, 233)',
              ],

              borderWidth: 3,
            },
          ],
        },
      });
    });
    //Question 15

    this._weather.question15(this.id).subscribe((res) => {
      var resp = res;

      var point: any = Object.values(resp);

      console.log('Q 15', point);

      this.chart15 = new Chart('canvas15', {
        type: 'pie',
        data: {
          labels: ['Excelent', 'Good', 'Very_Good', 'Fair'],

          datasets: [
            {
              data: point,
              // borderColor: '#3e95cd',

              label: 'Question 15 Count',
              backgroundColor: [
                'rgb(22, 160, 133)',
                'rgb(255, 99, 132)',
                'rgb(255, 205, 86)',
                'rgb(142, 68, 173)',
                'rgb(142, 68, 233)',
              ],

              borderWidth: 3,
            },
          ],
        },
      });
    });
    //Question 16

    this._weather.question16(this.id).subscribe((res) => {
      var resp = res;

      var point: any = Object.values(resp);

      console.log('Q 16', point);

      this.chart16 = new Chart('canvas16', {
        type: 'pie',
        data: {
          labels: ['Excelent', 'Good', 'Very_Good', 'Fair'],

          datasets: [
            {
              data: point,
              // borderColor: '#3e95cd',

              label: 'Question 16 Count',
              backgroundColor: [
                'rgb(22, 160, 133)',
                'rgb(255, 99, 132)',
                'rgb(255, 205, 86)',
                'rgb(142, 68, 173)',
                'rgb(142, 68, 233)',
              ],

              borderWidth: 3,
            },
          ],
        },
      });
    });
    //Question 17

    this._weather.question17(this.id).subscribe((res) => {
      var resp = res;

      var point: any = Object.values(resp);

      console.log('Q 17', point);

      this.chart17 = new Chart('canvas17', {
        type: 'pie',
        data: {
          labels: ['Excelent', 'Good', 'Very_Good', 'Fair'],

          datasets: [
            {
              data: point,
              // borderColor: '#3e95cd',

              label: 'Question 17 Count',
              backgroundColor: [
                'rgb(22, 160, 133)',
                'rgb(255, 99, 132)',
                'rgb(255, 205, 86)',
                'rgb(142, 68, 173)',
                'rgb(142, 68, 233)',
              ],

              borderWidth: 3,
            },
          ],
        },
      });
    });

    //Question 18

    this._weather.question18(this.id).subscribe((res) => {
      var resp = res;

      var point: any = Object.values(resp);

      console.log('Q 18', point);

      this.chart18 = new Chart('canvas18', {
        type: 'pie',
        data: {
          labels: ['Excelent', 'Good', 'Very_Good', 'Fair'],

          datasets: [
            {
              data: point,
              // borderColor: '#3e95cd',

              label: 'Question 18 Count',
              backgroundColor: [
                'rgb(22, 160, 133)',
                'rgb(255, 99, 132)',
                'rgb(255, 205, 86)',
                'rgb(142, 68, 173)',
                'rgb(142, 68, 233)',
              ],

              borderWidth: 3,
            },
          ],
        },
      });
    });

    //Question19

    this._weather.question19(this.id).subscribe((res) => {
      var resp = res;

      var point: any = Object.values(resp);

      console.log('Q 19', point);

      this.chart19 = new Chart('canvas19', {
        type: 'pie',
        data: {
          labels: ['Excelent', 'Good', 'Very_Good', 'Fair'],

          datasets: [
            {
              data: point,
              // borderColor: '#3e95cd',

              label: 'Question 19 Count',
              backgroundColor: [
                'rgb(22, 160, 133)',
                'rgb(255, 99, 132)',
                'rgb(255, 205, 86)',
                'rgb(142, 68, 173)',
                'rgb(142, 68, 233)',
              ],

              borderWidth: 3,
            },
          ],
        },
      });
    });
    //Question 20

    this._weather.question20(this.id).subscribe((res) => {
      var resp = res;

      var point: any = Object.values(resp);

      console.log('Q 5', point);

      this.chart20 = new Chart('canvas20', {
        type: 'pie',
        data: {
          labels: ['Excelent', 'Good', 'Very_Good', 'Fair'],

          datasets: [
            {
              data: point,
              // borderColor: '#3e95cd',

              label: 'Question 20 Count',
              backgroundColor: [
                'rgb(22, 160, 133)',
                'rgb(255, 99, 132)',
                'rgb(255, 205, 86)',
                'rgb(142, 68, 173)',
                'rgb(142, 68, 233)',
              ],

              borderWidth: 3,
            },
          ],
        },
      });
    });

    //Question 21

    this._weather.question21(this.id).subscribe((res) => {
      var resp = res;

      var point: any = Object.values(resp);

      console.log('Q 21', point);

      this.chart21 = new Chart('canvas21', {
        type: 'pie',
        data: {
          labels: ['Excelent', 'Good', 'Very_Good', 'Fair'],

          datasets: [
            {
              data: point,
              // borderColor: '#3e95cd',

              label: 'Question 21 Count',
              backgroundColor: [
                'rgb(22, 160, 133)',
                'rgb(255, 99, 132)',
                'rgb(255, 205, 86)',
                'rgb(142, 68, 173)',
                'rgb(142, 68, 233)',
              ],

              borderWidth: 3,
            },
          ],
        },
      });
    });
  }

  onBack() {
    this.route.navigate(['/Admin']);
  }
}
