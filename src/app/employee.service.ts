import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
@Injectable()
export class EmployeeService {
  private apiUrl = 'http://59968bef8b9faa0011aec58a.mockapi.io/api/employee';
  constructor(private _http: Http) { }
  getList(): Observable<any[]> {
    return this._http.get(this.apiUrl).map((res: Response) => res.json());
  }
  getInfo(id: number): Observable<any> {
    return this._http.get(this.apiUrl + '/' + id).map((res: Response) => res.json());
  }
  Update(idemployee: number, data: any): Observable<any> {
    return this._http.put(this.apiUrl + '/' + idemployee, data).map((res: Response) => res.json());
  }
  Create(data: any): Observable<any> {
    return this._http.post(this.apiUrl, data).map((res: Response) => res.json());
  }
  Delete(id: number): Observable<any> {
    return this._http.delete(this.apiUrl + '/' + id).map((res: Response) => res.json());
  }
  Search(keyword: string): Observable<any[]> {
    return this._http.get(this.apiUrl + '?' + 'search=' + keyword).map((res: Response) => res.json());
  }
}
