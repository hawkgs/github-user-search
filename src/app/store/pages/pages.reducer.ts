import { createReducer, on } from '@ngrx/store';
import { Map } from 'immutable';
import { initialState, Page } from '../store';
import { cleanSearch } from '../search/search.actions';
import { addPage } from './pages.actions';

export const pagesReducer = createReducer(initialState.pages,
  on(
    addPage,
    (state: Map<number, Page>, { page }: { page: Page }) => state.set(page.page, page)
  ),
  on(
    cleanSearch,
    () => initialState.pages
  )
);
