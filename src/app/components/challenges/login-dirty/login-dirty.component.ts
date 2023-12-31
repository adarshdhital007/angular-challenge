import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { passwordValidator } from '../../validators/password-validator.directive';
import { CommonModule } from '@angular/common';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
@Component({
  selector: 'app-login-dirty',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule, ToastModule],
  templateUrl: './login-dirty.component.html',
  styleUrl: './login-dirty.component.scss',
  providers: [MessageService],
})
export class LoginDirtyComponent {
  loginForm: FormGroup;
  temporaryUsers: any[] = [];

  showPassword: boolean = false;

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  constructor(private fb: FormBuilder, private messageService: MessageService) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: [
        '',
        [Validators.required, Validators.minLength(8), passwordValidator()],
      ],
    });
  }
  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const userData = {
        username: this.username?.value,
        password: this.password?.value,
      };
      this.temporaryUsers.push(userData);

      this.messageService.add({
        severity: 'success',
        summary: 'Success',
        detail: 'Login Successful',
      });
      console.log('Form submitted successfully');
      console.log('Temporary Users:', this.temporaryUsers);

      this.loginForm.reset();
    } else {
      // Show error message for invalid form
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail:
          'Please fill in all required fields and correct the validation errors.',
      });
    }
  }
}
