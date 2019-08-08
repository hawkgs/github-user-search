import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { UsersApiRequests } from '../../api/users.api-requests';
import { User } from '../store';
import { addUser } from './users.actions';
import { ActionType } from '../actions';

@Injectable()
export class UsersEffects {
  loadUserData$ = createEffect(() => this.actions$.pipe(
    ofType(ActionType.LoadUserData),
    mergeMap((action: { username: string }) =>
      this.usersApi.getUser(action.username)
        .pipe(
          map((user: User) => addUser({ user })),
          catchError(() => EMPTY)
        ))
    )
  );

  constructor(
    private actions$: Actions,
    private usersApi: UsersApiRequests
  ) {}
}
