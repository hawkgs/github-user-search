import { Observable } from 'rxjs';

export abstract class Channel {
  abstract get(resourceUrl: string, config?: any): Observable<any>;
  abstract create(resourceUrl: string, payload: any, config?: any): Observable<any>;
  abstract update(resourceUrl: string, payload: any, config?: any): Observable<any>;
  abstract delete(resourceUrl: string, config?: any): Observable<any>;
}
