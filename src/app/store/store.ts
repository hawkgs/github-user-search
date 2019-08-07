import { Record, Map, List } from 'immutable';
import { Config } from '../config/config';

const userRecord = Record({
  id: -1,
  username: '',
  fullName: '',
  bio: '',
  followes: 0,
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
  followes: number;
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
  followes: number;
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
  users: List<number>([])
});

export interface IPage {
  page: number;
  size: number;
  users: List<number>;
}

export class Page extends pageRecord implements IPage {
  page: number;
  size: number;
  users: List<number>;

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
  pages: Map<number, Page>([])
});

export interface IStore {
  users: Map<number, User>;
  pages: Map<number, Page>;
}

export class Store extends storeRecord implements IStore {
  users: Map<number, User>;
  pages: Map<number, Page>;

  constructor(config: Partial<IStore>) {
    super(config);
  }
}

export const initialState = new Store({
  users: Map<number, User>([]),
  pages: Map<number, Page>([])
});
