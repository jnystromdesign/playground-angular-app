import { createFeatureSelector, createSelector } from '@ngrx/store';

import { UserState } from './user.state';

// Feature selector for the user state
const selectUserState = createFeatureSelector<UserState>('users');

// Selector for users array
export const selectAllUsers = createSelector(
  selectUserState,
  (state: UserState) => state.users
);

// Selector for loading state
export const selectUserLoading = createSelector(
  selectUserState,
  (state: UserState) => state.loading
);

// Selector for error state
export const selectUserError = createSelector(
  selectUserState,
  (state: UserState) => state.error
);
