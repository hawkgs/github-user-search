import { createAction, props } from '@ngrx/store';
import { ActionType } from '../actions';
import { Page } from '../store';
import { SearchOptions } from '../../api/api-utils';

export const addPage = createAction(
  ActionType.AddPage,
  props<{ page: Page }>()
);

export const loadPage = createAction(
  ActionType.LoadPage,
  props<{ options: SearchOptions, page: number }>()
);
