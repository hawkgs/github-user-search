import { Set } from 'immutable';
import { User, Search, Page } from '../../store/store';
import { ApiUser, ApiSearchOutput } from '../api-types';
import { Config } from '../../config/config';

export const toUser = (u: ApiUser, complete?: boolean): User => new User({
  id: u.id,
  username: u.login,
  fullName: u.name || '',
  avatar: u.avatar_url || u.gravatar_id || '',
  url: u.html_url,
  bio: u.bio || '',
  repos: u.public_repos,
  followers: u.followers,
  location: u.location || '',
  email: u.email || '',
  completeData: complete
});

export const toPage = (output: ApiSearchOutput, page: number): Page => new Page({
  page,
  size: Config.pageSize,
  users: Set(output.items.map((u: ApiUser) => u.id))
});

export const toSearch = (output: ApiSearchOutput, query: string): Search => new Search({
  query,
  resultsCount: output.total_count
});
