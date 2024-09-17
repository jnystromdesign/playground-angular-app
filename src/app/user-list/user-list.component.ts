import {
  Component,
  EventEmitter,
  Input,
  Output,
  computed,
} from '@angular/core';
import { clearUsers, loadUsers } from '../state/users/user.actions';
import {
  selectAllUsers,
  selectUserError,
  selectUserLoading,
} from '../state/users/user.selectors';

import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { User } from '../state/users/user.model';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-list.component.html',
})
export class UserListComponent {
  users$: Observable<User[]>;
  loading$: Observable<boolean>;
  error$: Observable<string | null>;
  @Input() isUserMenuShown = false;

  @Output() addUserEvent = new EventEmitter<string>();

  constructor(private store: Store) {
    this.users$ = this.store.select(selectAllUsers);
    this.loading$ = this.store.select(selectUserLoading);
    this.error$ = this.store.select(selectUserError);
  }

  onLoadUsers(): void {
    this.store.dispatch(loadUsers());
  }
  onClearUsers(): void {
    this.store.dispatch(clearUsers());
  }
  onAddUser(): void {
    this.addUserEvent.emit('onAddUser');
  }
}
