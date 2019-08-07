import { createReducer, on } from '@ngrx/store';
import { Map, List } from 'immutable';
import { initialState, User } from '../store';
import { addUser, updateUser, addUsers } from './users.actions';

export const usersReducer = createReducer(initialState.users,
  on(
    addUser,
    updateUser,
    (state: Map<number, User>, { user }: { user: User }) => state.set(user.id, user)
  ),
  on(
    addUsers,
    (state: Map<number, User>, { users }: { users: List<User> }) => {
      users.forEach((u: User) => state = state.set(u.id, u));
      return state;
    }
  )
);
