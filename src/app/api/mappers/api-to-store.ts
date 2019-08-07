import { List } from 'immutable';
import { User, Search } from '../../store/store';
import { ApiUser, ApiSearchOutput } from '../api-types';

export const toUser = (u: ApiUser): User => new User({
  id: u.id,
  username: u.login,
  fullName: u.name || '',
  avatar: u.avatar_url || u.gravatar_id || '',
  url: u.url,
  bio: u.bio || '',
  repos: u.public_repos,
  followes: u.followers,
  location: u.location || '',
  email: u.email || ''
});

export const toPage = (users: ApiUser[]): List<User> => List(users.map(toUser));

export const toSearch = (output: ApiSearchOutput, query: string): Search => new Search({
  query,
  resultsCount: output.total_count
});
