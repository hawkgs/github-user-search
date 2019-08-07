import { Injectable } from '@angular/core';
import { List } from 'immutable';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { EMPTY, from } from 'rxjs';
import { mergeMap, catchError, switchMap } from 'rxjs/operators';
import { UsersApiRequests } from '../../api/users.api-requests';
import { User, Page, Search } from '../store';
import { ActionType } from '../actions';
import { SearchOptions } from '../../api/api-utils';
import { addPage } from './pages.actions';
import { setSearch } from '../search';
import { addUsers } from '../users';

@Injectable()
export class PagesEffects {
  loadUserData$ = createEffect(() => this.actions$.pipe(
    ofType(ActionType.LoadPage),
    mergeMap(
      (action: { options: SearchOptions, page: number }) => from(this.usersApi.search(action.options, action.page)
    )
      .pipe(
        switchMap(([users, page, search]: [List<User>, Page, Search]) => [
          addUsers({ users }),
          setSearch({ search }),
          addPage({ page })
        ]),
        catchError(() => EMPTY)
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private usersApi: UsersApiRequests
  ) {}
}
