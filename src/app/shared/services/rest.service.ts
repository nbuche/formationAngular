import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class RestService{
  public baseUrl: string = 'api'

  constructor(public httpClient:HttpClient){}

  private static handleError(error : Response | any): Observable<Error>{
    return Observable.throw(error);
  }

  private static getHeaders(): HttpHeaders{
    return new HttpHeaders({
      'Content-type': 'application/json',
      'Access-Control-Allow-Origin':'*'
    });
  }

  public get(url):Observable<any>{
    let headers = RestService.getHeaders();
    const httpOptions = {headers : headers};
    return this.httpClient.get(this.baseUrl + url, httpOptions).catch(RestService.handleError);
  }

  public post(url, dataToPost): Observable<any>{
    let headers = RestService.getHeaders();
    const httpOptions = {headers : headers};
    return this.httpClient.post(this.baseUrl + url, dataToPost, httpOptions).catch(RestService.handleError);
  }

  public put(url, dataToPut) {
    let headers = RestService.getHeaders();
    const httpOptions = {headers: headers};
    return this.httpClient.put(this.baseUrl + url, dataToPut, httpOptions).catch(RestService.handleError);
  }

  public delete(url) {
    let headers = RestService.getHeaders();
    const httpOptions = {headers: headers};
    return this.httpClient.delete(this.baseUrl + url, httpOptions).catch(RestService.handleError);
  }
}
