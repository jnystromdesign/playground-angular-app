import { User, UserCreation } from './user.model';
import { createAction, props } from '@ngrx/store';

// Action to load users
export const loadUsers = createAction('[User List] Load Users');

// Action for successful load
export const loadUsersSuccess = createAction(
  '[User List] Load Users Success',
  props<{ users: User[] }>()
);

// Action for load failure
export const loadUsersFailure = createAction(
  '[User List] Load Users Failure',
  props<{ error: string }>()
);

export const clearUsers = createAction('[Users List] Removes all users');

// Updated and new actions for adding a user
export const addUser = createAction(
  '[User List] Add User',
  props<{ user: UserCreation }>()
);
export const addUserSuccess = createAction(
  '[User List] Add User Success',
  props<{ user: User }>()
);
export const addUserFailure = createAction(
  '[User List] Add User Failure',
  props<{ error: string }>()
);
