import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IndexService {
  loginData: Object = {};
  constructor( private http: HttpClient) {
  }
  getData(sendData: Object) {
    return new Promise ((resovle, reject) => {
      const url = 'http://10.22.218.208:8080/usercenter/api/user/json/manage/login';
      const httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      };
      this.http.post<any>(url, sendData, httpOptions).subscribe(res => {
        this.loginData = res;
        resovle(res);
      });
    });
  }
}
