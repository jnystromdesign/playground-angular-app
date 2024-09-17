import { Component, Input, forwardRef } from '@angular/core';
import {
  ControlValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="input-group">
      <label [for]="name">{{ label }}</label>
      <input
        [id]="name"
        [name]="name"
        [type]="type"
        [(ngModel)]="value"
        (blur)="onTouched()"
        (ngModelChange)="onChange($event)"
        [disabled]="disabled"
      />
    </div>
  `,
  styleUrl: './input.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent implements ControlValueAccessor {
  @Input() name!: string;
  @Input() label: string = 'Input';
  @Input() type: string = 'text';
  @Input() disabled: boolean = false;

  value: string = '';

  onChange: any = () => {};
  onTouched: any = () => {};

  writeValue(value: string): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
