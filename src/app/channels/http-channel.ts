import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Channel } from './channel';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpChannel extends Channel {
  constructor(private http: HttpClient) {
    super();
  }

  get(url: string, options?: any): Observable<any> {
    return this.http.get(url, options);
  }

  create(url: string, payload: any, options?: any): Observable<any> {
    return this.http.post(url, payload, options);
  }

  update(url: string, payload: any, options?: any): Observable<any> {
    return this.http.put(url, payload, options);
  }

  delete(url: string, options?: any): Observable<any> {
    return this.http.delete(url, options);
  }
}
