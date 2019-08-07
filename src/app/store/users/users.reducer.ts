import { createReducer, on } from '@ngrx/store';
import { Map } from 'immutable';
import { initialState, User } from '../store';
import { addUser, updateUser } from './users.actions';

export const usersReducer = createReducer(initialState.users,
  on(
    addUser,
    updateUser,
    (state: Map<number, User>, { user }: { user: User }) => state.set(user.id, user)
  )
);
