import { Component, signal } from '@angular/core';

import { LogoComponent } from './logo/logo.component';
import { RouterOutlet } from '@angular/router';
import { UserFormComponent } from './user-form/user-form.component';
import { UserListComponent } from './user-list/user-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LogoComponent, UserListComponent, UserFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'playground-app';
  showAddUsers = signal(false);
  openAddUsers() {
    this.showAddUsers.set(true);
  }
  closeAddUsers() {
    this.showAddUsers.set(false);
  }
}
