import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
  FormBuilder,
  Validators,
  FormGroup,
} from '@angular/forms';

@Component({
  selector: 'app-credit-card-formatter',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './credit-card-formatter.component.html',
  styleUrl: './credit-card-formatter.component.scss',
})
export class CreditCardFormatterComponent implements OnInit {
  creditCardForm!: FormGroup;
  months = [
    { value: '01', name: 'January' },
    { value: '02', name: 'February' },
    { value: '03', name: 'March' },
    { value: '04', name: 'April' },
    { value: '05', name: 'May' },
    { value: '06', name: 'June' },
    { value: '07', name: 'July' },
    { value: '08', name: 'August' },
    { value: '09', name: 'September' },
    { value: '10', name: 'October' },
    { value: '11', name: 'November' },
    { value: '12', name: 'December' },
  ];

  years = Array.from({ length: 10 }, (_, index) =>
    (new Date().getFullYear() + index).toString()
  );

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.creditCardForm = this.fb.group({
      cardNumber: ['', [Validators.required, Validators.pattern(/^\d{16}$/)]],
      expiryMonth: ['', Validators.required],
      expiryYear: ['', Validators.required],
      cvv: ['', [Validators.required, Validators.pattern(/^\d{3}$/)]],
    });
  }

  onSubmit(): void {
    if (this.creditCardForm.valid) {
      console.log('Form submitted:', this.creditCardForm.value);
    } else {
      console.log('Form is invalid. Please check the fields.');
    }
  }
}
