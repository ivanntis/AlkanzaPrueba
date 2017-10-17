import {Injectable} from '@angular/core';

import {Headers, Http, RequestOptions} from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

export class GenericService {

  private authHeader = 'Bearer ' + localStorage.getItem('token');
  private options: RequestOptions;
  private http: Http;

  constructor(http: Http) {
    this.http = http;
    const headersMD = new Headers();
    //headersMD.append('Authorization', this.authHeader);
    this.options = new RequestOptions({headers: headersMD});
  }

  public restGet(url: string): Observable<any> {
    return this.http.get(url/*, this.options*/)
      .map(response => response)
      .catch(error => Observable.throw(error));
  }

  public restDelete(url: string): Observable<any> {
    return this.http.delete(url, this.options)
      .map(response => response.json())
      .catch(error => Observable.throw(error));
  }


  public restPost(object: any, url: string): Observable<any> {
    return this.http.post(url, object, this.options)
      .map(response => response.json())
      .catch(error => Observable.throw(error));
  }

  public restPut(object: any, url: string): Observable<any> {
    return this.http.put(url, object, this.options)
      .map(response => response.json())
      .catch(error => Observable.throw(error));
  }

}
