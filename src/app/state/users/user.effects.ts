import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable, inject } from '@angular/core';
import {
  addUser,
  addUserFailure,
  addUserSuccess,
  loadUsers,
  loadUsersFailure,
  loadUsersSuccess,
} from './user.actions';
import { catchError, map, switchMap } from 'rxjs/operators';

import { UserService } from '../../core/user.service';
import { of } from 'rxjs';

@Injectable()
export class UserEffects {
  private actions$ = inject(Actions);
  private userService = inject(UserService);
  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadUsers),
      switchMap(() =>
        this.userService.getUsers().pipe(
          map((users) => {
            const usersWithId = users.filter((user) => {
              if (user && !user.id) {
                console.log(user);
              }
              return !!user && !!user.id;
            });
            return loadUsersSuccess({ users: usersWithId });
          }),
          catchError((error) => of(loadUsersFailure({ error: error.message })))
        )
      )
    )
  );

  addUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addUser),
      switchMap((action) =>
        this.userService.addUser(action.user).pipe(
          map((user) => addUserSuccess({ user })),
          catchError((error) => of(addUserFailure({ error: error.message })))
        )
      )
    )
  );
}
