import { Record, Map } from 'immutable';

const userRecord = Record({
  id: -1,
  username: '',
  fullName: '',
  bio: '',
  followes: 0,
  repos: 0,
  location: '',
  email: ''
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

  constructor(config: Partial<IUser>) {
    super(config);
  }
}

const storeRecord = Record({
  users: Map<number, User>([])
});

export interface IStore {
  users: Map<number, User>;
}

export class Store extends storeRecord implements IStore {
  users: Map<number, User>;

  constructor(config: Partial<IStore>) {
    super(config);
  }
}

export const initialState = new Store({
  users: Map<number, User>([])
});
