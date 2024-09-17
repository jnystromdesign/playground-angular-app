import {
  addUser,
  addUserFailure,
  addUserSuccess,
  clearUsers,
  loadUsers,
  loadUsersFailure,
  loadUsersSuccess,
} from './user.actions';
import { createReducer, on } from '@ngrx/store';

import { User } from './user.model';
import { initialUserState } from './user.state';

export const userReducer = createReducer(
  initialUserState,
  // When loading starts, set loading to true and clear any previous error
  on(loadUsers, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  // On success, populate users and set loading to false
  on(loadUsersSuccess, (state, { users }) => ({
    ...state,
    users,
    loading: false,
  })),
  // On failure, set error and stop loading
  on(loadUsersFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
  // On clear, reset to the initial state
  on(clearUsers, () => initialUserState),

  // When adding a user starts
  on(addUser, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  // On successful user addition
  on(addUserSuccess, (state, { user }) => ({
    ...state,
    users: [...state.users, user],
    loading: false,
  })),
  // On failure to add user
  on(addUserFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);
