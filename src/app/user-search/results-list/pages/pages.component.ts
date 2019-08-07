import { Component, Inject } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Search } from '../../../store/store';
import { map, mergeMap } from 'rxjs/operators';
import { ActivatedRoute, Params } from '@angular/router';
import { AppConfig, AppConfigToken } from '../../../config/config';

@Component({
  selector: 'gus-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent {
  search$: Observable<Search>;

  constructor(
    private store: Store<any>,
    private route: ActivatedRoute,
    @Inject(AppConfigToken) private config: AppConfig
  ) {
    this.search$ = this.store.pipe(select('search'));
  }

  get pages$(): Observable<{ page: number, selected: boolean }[]> {
    return this.search$.pipe(mergeMap((s: Search) => {
      if (!s) {
        return [];
      }
      const num = Math.ceil(s.resultsCount / this.config.pageSize);
      const pages = new Array(num).fill(0).map((_: number, i: number) => i + 1);
      return this.route.queryParams.pipe(
        map((p: Params) => {
          const current = parseInt(p.page || '0', 10);
          return pages.map((page: number) => ({ page, selected: current === page }));
        })
      );
    }));
  }
}
