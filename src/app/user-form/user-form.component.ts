import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
  inject,
} from '@angular/core';

import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { UserService } from '../core/user.service';
import { addUser } from '../state/users/user.actions';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss',
})
export class UserFormComponent implements AfterViewInit {
  constructor(private store: Store) {}
  @ViewChild('nameInput') nameInput!: ElementRef;
  @Output() onSubmitted = new EventEmitter();
  userService = inject(UserService);
  firstName = '';
  lastName = '';
  email = '';
  phone = '';

  ngAfterViewInit() {
    this.nameInput.nativeElement.focus();
  }

  close() {
    this.onSubmitted.emit('close');
  }

  async onSubmitForm() {
    const user = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      phone: this.phone,
      address: {
        city: 'Åkersberga',
        street: 'testgatan',
        zipcode: '12345',
      },
    };
    this.store.dispatch(addUser({ user }));
    this.close();
  }
}
