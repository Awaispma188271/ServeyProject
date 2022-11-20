import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Chart,registerables } from 'chart.js';
import { StudentChartService } from 'src/app/sharedServices/student-chart.service';

@Component({
  selector: 'app-student-chart',
  templateUrl: './student-chart.component.html',
  styleUrls: ['./student-chart.component.css'],
  providers:[StudentChartService]
})
export class StudentChartComponent implements OnInit {

 
  result: any;
  points: any;
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

  constructor(private _weather:StudentChartService,private route:Router) {
    Chart.register(...registerables);
   
  }

  ngOnInit() {
    this._weather.question1().subscribe(res=>{
      console.log(res);
     
this.points = res;
//this.coinName =res.Poor.map((coins: any) => coins.Poor);
//  console.log(this.coinPrice);
//  console.log(this.coinName);

this.chart = new Chart('canvas', {
 type: 'bar',
 data: {
   //labels: this.points,
   datasets: [
     {
       data: this.points,
       borderColor: '#3e95cd',
      
       label: 'Question 1 Chart',
      backgroundColor: [
       'rgb(255, 99, 132)',
       'rgb(54, 162, 235)',
       'rgb(255, 205, 86)',
       'rgb(255,206,123)'
     ],
       
       borderWidth: 3,
     },
   ],
 },
});
});

this._weather.question2().subscribe(res=>{
console.log(res);

this.points = res;
//this.coinName =res.Poor.map((coins: any) => coins.Poor);
//  console.log(this.coinPrice);
//  console.log(this.coinName);

this.chart2 = new Chart('canvas2', {
type: 'bar',
data: {
labels: this.coinName,
datasets: [
{
data: this.points,
borderColor: '#3e95cd',

label: 'Question 2 Chart',
backgroundColor: [
 'rgb(255, 99, 132)',
 'rgb(54, 162, 235)',
 'rgb(255, 205, 86)',
 'rgb(255,206,123)'
],

borderWidth: 3,
},
],
},
});
});


this._weather.question3().subscribe(res=>{
console.log(res);

this.points = res;

this.chart3 = new Chart('canvas3', {
type: 'bar',
data: {
labels: this.coinName,
datasets: [
{
data: this.points,
borderColor: '#3e95cd',

label: 'Question 3 Chart',
backgroundColor: [
'rgb(255, 99, 132)',
'rgb(54, 162, 235)',
'rgb(255, 205, 86)',
'rgb(255,206,123)'
],

borderWidth: 3,
},
],
},
});
});

//Question4

this._weather.question4().subscribe(res=>{
console.log(res);

this.points = res;

this.chart4 = new Chart('canvas4', {
type: 'bar',
data: {
labels: this.coinName,
datasets: [
{
data: this.points,
borderColor: '#3e95cd',

label: 'Question 4 Chart',
backgroundColor: [
'rgb(255, 99, 132)',
'rgb(54, 162, 235)',
'rgb(255, 205, 86)',
'rgb(255,206,123)'
],

borderWidth: 3,
},
],
},
});
});


//Question 5

this._weather.question5().subscribe(res=>{
console.log(res);

this.points = res;

this.chart5 = new Chart('canvas5', {
type: 'bar',
data: {
labels: this.coinName,
datasets: [
{
data: this.points,
borderColor: '#3e95cd',

label: 'Question 5 Chart',
backgroundColor: [
'rgb(255, 99, 132)',
'rgb(54, 162, 235)',
'rgb(255, 205, 86)',
'rgb(255,206,123)'
],

borderWidth: 3,
},
],
},
});
});

//Question 6

this._weather.question6().subscribe(res=>{
console.log(res);

this.points = res;

this.chart6 = new Chart('canvas6', {
type: 'bar',
data: {
labels: this.coinName,
datasets: [
{
data: this.points,
borderColor: '#3e95cd',

label: 'Question 6 Chart',
backgroundColor: [
'rgb(255, 99, 132)',
'rgb(54, 162, 235)',
'rgb(255, 205, 86)',
'rgb(255,206,123)'
],

borderWidth: 3,
},
],
},
});
});
//Question 7
this._weather.question7().subscribe(res=>{
console.log(res);

this.points = res;
this.chart7 = new Chart('canvas7', {
type: 'bar',
data: {
labels: this.coinName,
datasets: [
{
data: this.points,
borderColor: '#3e95cd',

label: 'Question 7 Chart',
backgroundColor: [
'rgb(255, 99, 132)',
'rgb(54, 162, 235)',
'rgb(255, 205, 86)',
'rgb(255,206,123)'
],

borderWidth: 3,
},
],
},
});
});

//Question 8

this._weather.question8().subscribe(res=>{
console.log(res);

this.points = res;

this.chart8 = new Chart('canvas8', {
type: 'bar',
data: {
labels: this.coinName,
datasets: [
{
data: this.points,
borderColor: '#3e95cd',

label: 'Question 8 Chart',
backgroundColor: [
'rgb(255, 99, 132)',
'rgb(54, 162, 235)',
'rgb(255, 205, 86)',
'rgb(255,206,123)'
],

borderWidth: 3,
},
],
},
});
});

//Question 9

this._weather.question9().subscribe(res=>{
console.log(res);

this.points = res;

this.chart9 = new Chart('canvas9', {
type: 'bar',
data: {
labels: this.coinName,
datasets: [
{
data: this.points,
borderColor: '#3e95cd',

label: 'Question 9 Chart',
backgroundColor: [
'rgb(255, 99, 132)',
'rgb(54, 162, 235)',
'rgb(255, 205, 86)',
'rgb(255,206,123)'
],

borderWidth: 3,
},
],
},
});
});

//Question 10

this._weather.question10().subscribe(res=>{
console.log(res);

this.points = res;

this.chart10 = new Chart('canvas10', {
type: 'bar',
data: {
labels: this.coinName,
datasets: [
{
data: this.points,
borderColor: '#3e95cd',

label: 'Question 10 Chart',
backgroundColor: [
'rgb(255, 99, 132)',
'rgb(54, 162, 235)',
'rgb(255, 205, 86)',
'rgb(255,206,123)'
],

borderWidth: 3,
},
],
},
});
});

//Question11

this._weather.question11().subscribe(res=>{
console.log(res);

this.points = res;

this.chart11 = new Chart('canvas11', {
type: 'bar',
data: {
labels: this.coinName,
datasets: [
{
data: this.points,
borderColor: '#3e95cd',

label: 'Question 11 Chart',
backgroundColor: [
'rgb(255, 99, 132)',
'rgb(54, 162, 235)',
'rgb(255, 205, 86)',
'rgb(255,206,123)'
],

borderWidth: 3,
},
],
},
});
});

//Question 12

this._weather.question12().subscribe(res=>{
console.log(res);

this.points = res;

this.chart12 = new Chart('canvas12', {
type: 'bar',
data: {
labels: this.coinName,
datasets: [
{
data: this.points,
borderColor: '#3e95cd',

label: 'Question 12 Chart',
backgroundColor: [
'rgb(255, 99, 132)',
'rgb(54, 162, 235)',
'rgb(255, 205, 86)',
'rgb(255,206,123)'
],

borderWidth: 3,
},
],
},
});
});

//Question13

this._weather.question13().subscribe(res=>{
console.log(res);

this.points = res;

this.chart13 = new Chart('canvas13', {
type: 'bar',
data: {
labels: this.coinName,
datasets: [
{
data: this.points,
borderColor: '#3e95cd',

label: 'Question 13 Chart',
backgroundColor: [
'rgb(255, 99, 132)',
'rgb(54, 162, 235)',
'rgb(255, 205, 86)',
'rgb(255,206,123)'
],

borderWidth: 3,
},
],
},
});
});

//Question 14

this._weather.question14().subscribe(res=>{
console.log(res);

this.points = res;

this.chart14 = new Chart('canvas14', {
type: 'bar',
data: {
labels: this.coinName,
datasets: [
{
data: this.points,
borderColor: '#3e95cd',

label: 'Question 14 Chart',
backgroundColor: [
'rgb(255, 99, 132)',
'rgb(54, 162, 235)',
'rgb(255, 205, 86)',
'rgb(255,206,123)'
],

borderWidth: 3,
},
],
},
});
});

//Question 15

this._weather.question15().subscribe(res=>{
console.log(res);

this.points = res;

this.chart15 = new Chart('canvas15', {
type: 'bar',
data: {
labels: this.coinName,
datasets: [
{
data: this.points,
borderColor: '#3e95cd',

label: 'Question 15 Chart',
backgroundColor: [
'rgb(255, 99, 132)',
'rgb(54, 162, 235)',
'rgb(255, 205, 86)',
'rgb(255,206,123)'
],

borderWidth: 3,
},
],
},
});
});

//Question 16

this._weather.question16().subscribe(res=>{
console.log(res);

this.points = res;

this.chart16 = new Chart('canvas16', {
type: 'bar',
data: {
labels: this.coinName,
datasets: [
{
data: this.points,
borderColor: '#3e95cd',

label: 'Question 16 Chart',
backgroundColor: [
'rgb(255, 99, 132)',
'rgb(54, 162, 235)',
'rgb(255, 205, 86)',
'rgb(255,206,123)'
],

borderWidth: 3,
},
],
},
});
});

//Question 17

this._weather.question17().subscribe(res=>{
console.log(res);

this.points = res;

this.chart17 = new Chart('canvas17', {
type: 'bar',
data: {
labels: this.coinName,
datasets: [
{
data: this.points,
borderColor: '#3e95cd',

label: 'Question 17 Chart',
backgroundColor: [
'rgb(255, 99, 132)',
'rgb(54, 162, 235)',
'rgb(255, 205, 86)',
'rgb(255,206,123)'
],

borderWidth: 3,
},
],
},
});
});

//Question 18

this._weather.question18().subscribe(res=>{
console.log(res);

this.points = res;

this.chart18 = new Chart('canvas18', {
type: 'bar',
data: {
labels: this.coinName,
datasets: [
{
data: this.points,
borderColor: '#3e95cd',

label: 'Question 18 Chart',
backgroundColor: [
'rgb(255, 99, 132)',
'rgb(54, 162, 235)',
'rgb(255, 205, 86)',
'rgb(255,206,123)'
],

borderWidth: 3,
},
],
},
});
});

//Question19

this._weather.question19().subscribe(res=>{
console.log(res);

this.points = res;

this.chart19 = new Chart('canvas19', {
type: 'bar',
data: {
labels: this.coinName,
datasets: [
{
data: this.points,
borderColor: '#3e95cd',

label: 'Question 19 Chart',
backgroundColor: [
'rgb(255, 99, 132)',
'rgb(54, 162, 235)',
'rgb(255, 205, 86)',
'rgb(255,206,123)'
],

borderWidth: 3,
},
],
},
});
});

//Question 20

this._weather.question20().subscribe(res=>{
  console.log(res);
 
this.points = res;

this.chart20 = new Chart('canvas20', {
type: 'bar',
data: {
  labels: this.coinName,
datasets: [
 {
   data: this.points,
   borderColor: '#3e95cd',
  
   label: 'Question 20 Chart',
   backgroundColor: [
    'rgb(255, 99, 132)',
    'rgb(54, 162, 235)',
    'rgb(255, 205, 86)',
    'rgb(255,206,123)'
  ],
   
   borderWidth: 3,
 },
],
},
});
});

//Question 21

this._weather.question21().subscribe(res=>{
  console.log(res);
 
this.points = res;

this.chart21 = new Chart('canvas21', {
type: 'bar',
data: {
  labels: this.coinName,
datasets: [
 {
   data: this.points,
   borderColor: '#3e95cd',
  
   label: 'Question 21 Chart',
   backgroundColor: [
    'rgb(255, 99, 132)',
    'rgb(54, 162, 235)',
    'rgb(255, 205, 86)',
    'rgb(255,206,123)'
  ],
   
   borderWidth: 3,
 },
],
},
});
});

  }

  onBack(){
    this.route.navigate(['/Admin']);
  }

}
