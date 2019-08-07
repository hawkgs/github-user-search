import { createAction, props } from '@ngrx/store';
import { ActionType } from '../actions';
import { Search } from '../store';

export const setSearch = createAction(
  ActionType.SetSearch,
  props<{ search: Search }>()
);

export const cleanSearch = createAction(ActionType.CleanSearch);
