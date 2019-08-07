import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Map, List, Set } from 'immutable';
import { ActivatedRoute, Params } from '@angular/router';

import { User, Search, Page } from '../../store/store';
import { queryConstructor } from '../../api/api-utils';
import { Observable } from 'rxjs';
import { loadPage } from '../../store/pages';
import { map, mergeMap, take, concatMap } from 'rxjs/operators';

@Component({
  selector: 'gus-results-list',
  templateUrl: './results-list.component.html',
  styleUrls: ['./results-list.component.css']
})
export class ResultsListComponent implements OnInit {
  search$: Observable<Search>;
  pages$: Observable<Map<number, Page>>;
  users$: Observable<Map<number, User>>;
  query = '';

  constructor(
    private route: ActivatedRoute,
    private store: Store<{ users: Map<number, User> }>
  ) {
    this.search$ = store.pipe(select('search'));
    this.pages$ = store.pipe(select('pages'));
    this.users$ = store.pipe(select('users'));
  }

  get pageUsers$(): Observable<List<User>> {
    return this.currentPageUserIds$.pipe(
      mergeMap((userIds: Set<number>) =>
        this.users$.pipe(
          map((users: Map<number, User>) => List(users.filter(u => userIds.has(u.id)).values()))
        )
      )
    );
  }

  private get currentPage$(): Observable<number> {
    return this.route.queryParams.pipe(
      map((p: Params) => parseInt(p.page || '0', 10))
    );
  }

  private get currentPageUserIds$(): Observable<Set<number>> {
    return this.currentPage$.pipe(
      mergeMap((page: number) =>
        this.pages$.pipe(map((pages: Map<number, Page>) => {
          const r = pages.get(page);
          if (r) {
            return r.users;
          }
          return Set([]);
        }))
      )
    );
  }

  ngOnInit() {
    this.route.queryParams
      .subscribe((params: Params) => {
        if (params.followers) {
          params.followers = parseInt(params.followers, 10);
        }
        if (params.repos) {
          params.repos = parseInt(params.repos, 10);
        }

        const query = queryConstructor(params);
        const page = parseInt(params.page || '0', 10);
        this.query = query.replace('+', ' ').replace('q=', '');

        this.search$.pipe(
          concatMap((search: Search | null) =>
            this.pages$.pipe(map((pages: Map<number, Page>) => [pages, search]))
          )
        )
          .pipe(take(1))
          .subscribe(([pages, search]: [ Map<number, Page>, Search | null ]) => {
            if (!search || search.query !== query || !pages.get(page)) {
              this.store.dispatch(loadPage({ options: params, page }));
            }
          });
      });
  }
}
