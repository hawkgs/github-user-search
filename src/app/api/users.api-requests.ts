import { Injectable, Inject } from '@angular/core';
// import { List } from 'immutable';
import { Channel } from '../channels/channel';
import { User } from '../store/store';
import { AppConfigToken, AppConfig } from '../config/config';

@Injectable()
export class UsersApiRequests {
  constructor(
    private channel: Channel,
    @Inject(AppConfigToken) private config: AppConfig
  ) {}

  getUser(username: string): Promise<User> {
    return this.channel.get(`${this.config.apiUrl}/users/${username}`);
  }
}
