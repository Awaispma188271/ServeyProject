import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServeyServiceService {
  private baseURL: string = 'https://localhost:7042/api/Survey/';
  currentUser: BehaviorSubject<any> = new BehaviorSubject(null);
  jwtHelperService = new JwtHelperService();
  constructor(private http: HttpClient, private route: Router) {}

  public Student_Servey(user: User) {
    var headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');

    return this.http.post(this.baseURL + 'CreateStudentSurvey', user);
  }

  public Employee_Servey(user: User) {
    var headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');

    return this.http.post(this.baseURL + 'CreateEmployeeSurvey', user);
  }

  public getStudentRes(Id: any) {
    var headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');

    return this.http.get(this.baseURL + 'GetAllStudent/' + Id);
  }
  public deleteEntityStudent(Id: any) {
    var headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');

    return this.http.delete(this.baseURL + 'deleteStudentEntity/' + Id);
  }

  public getEmployeeRes(Id: any) {
    var headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');

    return this.http.get(this.baseURL + 'GetAllEmployee/' + Id);
  }
  public deleteEntityEmployer(Id: any) {
    var headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');

    return this.http.delete(this.baseURL + 'deleteEmployeeEntity/' + Id);
  }

  login(user: Array<string>): Observable<any> {
    return this.http.post(
      this.baseURL + 'loginAdmin',
      {
        email: user[0],
        password: user[1],
        department: user[1],
      },
      {
        responseType: 'text',
      }
    );
  }

  setToken(token: string) {
    localStorage.setItem('Token', token);
    // this.loadCurrentUser();
  }

  isLoggin(): boolean {
    return localStorage.getItem('Token') ? true : false;
  }
  isLogOut() {
    localStorage.removeItem('Token');
    this.route.navigateByUrl('/AdminLogin');
  }
  public getDecodedToken(): any {
    var token: any = localStorage.getItem('Token');

    var decodedToken = this.jwtHelperService.decodeToken(token);
    return decodedToken.Email;
  }

  /*
  public allUsers(user: User): Observable<SurveyResponse> {
    var headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');

    return this.http.post<SurveyResponse>(this.baseURL + 'createRegisterUser', user, {
      headers: headers
    });
  }
  public getUser(){
    var headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');

    return this.http.get(this.baseURL + 'getUser', {
      headers: headers
    });
  }
  public studentAccept(id:number){
    var headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');

    return this.http.post(this.baseURL + 'studentAccept/'+id, id, {
      headers: headers
    });
  }

  login(user: Array<string>): Observable<any> {
   

    return this.http.post(
      this.baseURL + 'loginUser', {
        email: user[0],
        password:user[1]
      },{
        responseType:'text',
      }
    
    );
  }
  setToken(token: string) {
    localStorage.setItem('Token', token);
    // this.loadCurrentUser();
  }

  // loadCurrentUser(){
  //   const token = localStorage.getItem("Token");
  //   const userInfo = token != null ? this.jwtHelperService.decodeToken(token):null;
  //   // const data = userInfo ?{
  //   //   id:userInfo.id,
  //   //   UserName:userInfo.UserName,
  //   //   Email:userInfo.Email,
  //   //   FullName:userInfo.FullName
  //   // }:null

  //   this.currentUser.next(userInfo);
  //   console.log(userInfo);

  // }
  isLoggin(): boolean {
    return localStorage.getItem('Token') ? true : false;
  }

  isLogOut() {
    localStorage.removeItem('Token');
    this.route.navigateByUrl('/user/login');
  }

  private getDecodedToken(): any {
    var token:any = localStorage.getItem('Token');
   
    var decodedToken = this.jwtHelperService.decodeToken(token);
    return decodedToken;
  }
 

 
  public getUserRoleId(): string {
    var decodedToken = this.getDecodedToken();
    return decodedToken?.RoleId;
  }
  */
}

export class User {
  Question_1!: string;
  Question_2!: string;
  Question_3!: string;
  Question_4!: string;
  Question_5!: string;
  Question_6!: string;
  Question_7!: string;
  Question_8!: string;
  Question_9!: string;
  Question_10!: string;
  Question_11!: string;
  Question_12!: string;
  Question_13!: string;
  Question_14!: string;
  Question_15!: string;
  Question_16!: string;
  Question_17!: string;
  Question_18!: string;
  Question_19!: string;
  Question_20!: string;
  StudentName!: string;
  Department!: string;
  Organization_Name!: string;
  Organization_Position!: string;
  Graduation_year!: number;
  Comments!:string;
  Email!: string;
}
