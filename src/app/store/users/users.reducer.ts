import { createReducer, on } from '@ngrx/store';
import { Map } from 'immutable';
import { initialState, User } from '../store';
import { addUser } from './users.actions';

export const usersReducer = createReducer(initialState.users,
  on(
    addUser,
    (state: Map<number, User>, { user }: { user: User }) => state.set(user.id, user)
  )
);
