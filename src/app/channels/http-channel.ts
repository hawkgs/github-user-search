import { Injectable } from '@angular/core';
import { Channel } from './channel';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpChannel extends Channel {
  constructor(private http: HttpClient) {
    super();
  }

  get(url: string, options?: any): Promise<any> {
    return this.http.get(url, options).toPromise();
  }

  create(url: string, payload: any, options?: any): Promise<any> {
    return this.http.post(url, payload, options).toPromise();
  }

  update(url: string, payload: any, options?: any): Promise<any> {
    return this.http.put(url, payload, options).toPromise();
  }

  delete(url: string, options?: any): Promise<any> {
    return this.http.delete(url, options).toPromise();
  }
}
