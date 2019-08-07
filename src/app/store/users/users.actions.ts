import { createAction, props } from '@ngrx/store';
import { ActionType } from '../actions';
import { User } from '../store';

export const addUser = createAction(
  ActionType.AddUser,
  props<{ user: User }>()
);
