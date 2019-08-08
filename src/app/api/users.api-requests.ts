import { Injectable, Inject } from '@angular/core';
import { List } from 'immutable';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { Channel } from '../channels/channel';
import { User, Search, Page } from '../store/store';
import { AppConfigToken, AppConfig } from '../config/config';
import { toUser, toPage, toSearch } from './mappers/api-to-store';
import { ApiUser, ApiSearchOutput } from './api-types';
import { queryConstructor, SearchOptions } from './api-utils';

@Injectable()
export class UsersApiRequests {
  constructor(
    private channel: Channel,
    @Inject(AppConfigToken) private config: AppConfig
  ) {}

  getUser(username: string): Observable<User> {
    return this.channel.get(`${this.config.apiUrl}/users/${username}`)
      .pipe(
        take(1),
        map((u: ApiUser) => toUser(u, true))
      );
  }

  search(options: SearchOptions, page: number): Observable<[List<User>, Page, Search]> {
    const query = queryConstructor(options);
    const pagedQuery = query + `&page=${page}&per_page=${this.config.pageSize}`;

    return this.channel.get(`${this.config.apiUrl}/search/users?${pagedQuery}`)
      .pipe(
        take(1),
        map((o: ApiSearchOutput) => [
          List(o.items.map((u: ApiUser) => toUser(u))),
          toPage(o, page),
          toSearch(o, query)
        ])
      );
  }
}
