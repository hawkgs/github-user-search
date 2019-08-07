import { Record, Map, Set } from 'immutable';
import { Config } from '../config/config';

const userRecord = Record({
  id: -1,
  username: '',
  fullName: '',
  bio: '',
  followers: 0,
  repos: 0,
  location: '',
  email: '',
  avatar: '',
  url: '',
  completeData: false
});

export interface IUser {
  id: number;
  username: string;
  fullName: string;
  bio: string;
  followers: number;
  repos: number;
  location: string;
  email: string;
  avatar: string;
  url: string;
  completeData: boolean;
}

export class User extends userRecord implements IUser {
  id: number;
  username: string;
  fullName: string;
  bio: string;
  followers: number;
  repos: number;
  location: string;
  email: string;
  avatar: string;
  url: string;
  completeData: boolean;

  constructor(config: Partial<IUser>) {
    super(config);
  }
}

const pageRecord = Record({
  page: 0,
  size: Config.pageSize,
  users: Set<number>([])
});

export interface IPage {
  page: number;
  size: number;
  users: Set<number>;
}

export class Page extends pageRecord implements IPage {
  page: number;
  size: number;
  users: Set<number>;

  constructor(config: Partial<IPage>) {
    super(config);
  }
}

const searchRecord = Record({
  query: '',
  resultsCount: 0
});

export interface ISearch {
  query: string;
  resultsCount: number;
}

export class Search extends searchRecord implements ISearch {
  query: string;
  resultsCount: number;

  constructor(config: Partial<ISearch>) {
    super(config);
  }
}

const storeRecord = Record({
  users: Map<number, User>([]),
  pages: Map<number, Page>([]),
  search: null
});

export interface IStore {
  users: Map<number, User>;
  pages: Map<number, Page>;
  search: Search | null;
}

export class Store extends storeRecord implements IStore {
  users: Map<number, User>;
  pages: Map<number, Page>;
  search: Search | null;

  constructor(config: Partial<IStore>) {
    super(config);
  }
}

export const initialState = new Store({
  users: Map<number, User>([]),
  pages: Map<number, Page>([]),
  search: null
});
