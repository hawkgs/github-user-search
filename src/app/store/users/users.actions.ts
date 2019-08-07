import { createAction, props } from '@ngrx/store';
import { ActionType } from '../actions';
import { User } from '../store';

export const addUser = createAction(
  ActionType.AddUser,
  props<{ user: User }>()
);

export const updateUser = createAction(
  ActionType.UpdateUser,
  props<{ user: User }>()
);

export const loadUserData = createAction(
  ActionType.LoadUserData,
  props<{ username: string }>()
);
