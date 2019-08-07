import { createAction, props } from '@ngrx/store';
import { List } from 'immutable';
import { ActionType } from '../actions';
import { User } from '../store';

export const addUser = createAction(
  ActionType.AddUser,
  props<{ user: User }>()
);

export const addUsers = createAction(
  ActionType.AddUsers,
  props<{ users: List<User> }>()
);

export const updateUser = createAction(
  ActionType.UpdateUser,
  props<{ user: User }>()
);

export const loadUserData = createAction(
  ActionType.LoadUserData,
  props<{ username: string }>()
);
