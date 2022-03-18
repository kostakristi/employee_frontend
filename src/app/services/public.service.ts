import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class PublicService {
  api_url = 'http://localhost:8000/';

  constructor(private http: HttpClient) { }

  getDepartments(): Observable<any[]> {
    let test = this.http.get<any[]>(this.api_url + 'department')
    return test;
  }

  addDepartment(val: any) {
    return this.http.post(this.api_url + 'department', val, httpOptions);
  }

  updateDepartment(val: any) {
    let test = this.http.put(this.api_url + 'department', val, httpOptions);
    console.log(test);
    return test;
  }

  deleteDepartment(val: any) {
    return this.http.delete(this.api_url + 'department/' + val);
  }

  getJobPosition(): Observable<any[]> {
    return this.http.get<any[]>(this.api_url + 'position')
  }

  addJobPosition(val: any) {
    return this.http.post(this.api_url + 'position', val);
  }

  updateJobPosition(val: any) {
    return this.http.put(this.api_url + 'position', val)
  }

  deleteJobPosition(val: any) {
    return this.http.delete(this.api_url + 'position/' + val);
  }

  getEmployee(): Observable<any[]> {
    return this.http.get<any[]>(this.api_url + 'employee')
  }

  addEmployee(val: any) {
    return this.http.post(this.api_url + 'employee', val);
  }

  updateEmployee(val: any) {
    return this.http.put(this.api_url + 'employee', val)
  }

  deleteEmployee(val: any) {
    return this.http.delete(this.api_url + 'employee/' + val);
  }
  getAllDepartmentNames(): Observable<any[]> {
    return this.http.get<any[]>(this.api_url + 'department');
  }
  getAllPositionsNames(): Observable<any[]> {
    return this.http.get<any[]>(this.api_url + 'position')
  }
}
