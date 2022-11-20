import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentChartService {

  private baseURL: string = 'https://localhost:44314/api/StudentChart/';
  constructor(private _http:HttpClient) { }

  
  public question1(){
   // var headers = new HttpHeaders();
   // headers.append('Content-Type', 'application/json');
  //  return this._http
  //  .get(this.baseURL + 'GetAllStudent', httpOptions)
  //  .toPromise()
  //  .then((data) => {
  //    return data;
  //  });
    return this._http.get<any[]>(this.baseURL + 'GetchartQ1');
  }
  public question2(){
    return this._http.get<any[]>(this.baseURL + 'GetchartQ2');
  }
  public question3(){
    return this._http.get<any[]>(this.baseURL + 'GetchartQ3');
  }
  public question4(){
    return this._http.get<any[]>(this.baseURL + 'GetchartQ4');
  }
  public question5(){
    return this._http.get<any[]>(this.baseURL + 'GetchartQ5');
  }
  public question6(){
    return this._http.get<any[]>(this.baseURL + 'GetchartQ6');
  }
  public question7(){
    return this._http.get<any[]>(this.baseURL + 'GetchartQ7');
  }
  public question8(){
    return this._http.get<any[]>(this.baseURL + 'GetchartQ8');
  }
  public question9(){
    return this._http.get<any[]>(this.baseURL + 'GetchartQ9');
  }
  public question10(){
    return this._http.get<any[]>(this.baseURL + 'GetchartQ10');
  }
  public question11(){
    return this._http.get<any[]>(this.baseURL + 'GetchartQ11');
  }
  public question12(){
    return this._http.get<any[]>(this.baseURL + 'GetchartQ12');
  }
  public question13(){
    return this._http.get<any[]>(this.baseURL + 'GetchartQ13');
  }
  public question14(){
    return this._http.get<any[]>(this.baseURL + 'GetchartQ14');
  }
  public question15(){
    return this._http.get<any[]>(this.baseURL + 'GetchartQ15');
  }
  public question16(){
    return this._http.get<any[]>(this.baseURL + 'GetchartQ16');
  }
  public question17(){
    return this._http.get<any[]>(this.baseURL + 'GetchartQ17');
  }
  public question18(){
    return this._http.get<any[]>(this.baseURL + 'GetchartQ18');
  }
  public question19(){
    return this._http.get<any[]>(this.baseURL + 'GetchartQ19');
  }
  public question20(){
    return this._http.get<any[]>(this.baseURL + 'GetchartQ20');
  }
  public question21(){
    return this._http.get<any[]>(this.baseURL + 'GetchartQ21');
  }
}
