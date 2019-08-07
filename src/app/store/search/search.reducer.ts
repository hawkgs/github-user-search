import { createReducer, on } from '@ngrx/store';
import { initialState, Search } from '../store';
import { setSearch, cleanSearch } from './search.actions';

export const searchReducer = createReducer(initialState.search,
  on(
    setSearch,
    (_: Search | null, { search }: { search: Search }) => search
  ),
  on(
    cleanSearch,
    () => null
  )
);
