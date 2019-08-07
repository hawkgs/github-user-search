import { Injectable, Inject } from '@angular/core';
import { List } from 'immutable';
import { Channel } from '../channels/channel';
import { User, Search } from '../store/store';
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

  getUser(username: string): Promise<User> {
    return this.channel.get(`${this.config.apiUrl}/users/${username}`)
      .then((u: ApiUser) => toUser(u));
  }

  search(options: SearchOptions, page: number): Promise<[List<User>, Search]> {
    const query = queryConstructor(options);
    const pagedQuery = query + `&page=${page}&per_page${this.config.pageSize}`;

    return this.channel.get(`${this.config.apiUrl}/search/users?${pagedQuery}`)
      .then((o: ApiSearchOutput) => [
        toPage(o.items),
        toSearch(o, query)
      ]);
  }
}
