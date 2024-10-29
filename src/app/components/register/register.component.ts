// Import necessary modules and services
import { MessageService } from 'primeng/api';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { passwordMismatchValidator } from '../../shared/password-mismatch.directive';
import { AuthService } from '../../services/auth.service';
import { RegisterPostData } from '../../interfaces/auth';

@Component({
  selector: 'app-register', // Component selector
  standalone: true, // Indicates this component is standalone
  imports: [ReactiveFormsModule, CardModule, InputTextModule, PasswordModule, ButtonModule, RouterLink], // Modules to import
  templateUrl: './register.component.html', // Template URL
  styleUrl: './register.component.css' // Style URL
})
export class RegisterComponent {
  // Inject the AuthService using the inject method instead of the constructor
  private registerService = inject(AuthService);

  // Inject the MessageService for displaying toast messages
  private messageService = inject(MessageService);

  // Inject the Router service for navigation
  private router = inject(Router);

  // Define the registration form with form controls and validators
  registerForm = new FormGroup({
    fullName: new FormControl('', [Validators.required]),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern(/[a-z0-9\._%\+\-]+@[a-z0-9\.\-]+\.[a-z]{2,}$/)
    ]),
    password: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('', [Validators.required]),
  }, {
    // Custom validation for password and confirm password mismatch
    validators: passwordMismatchValidator
  });

  // Method to handle registration
  onRegister() {
    console.log(this.registerForm.value);

    // Prepare the data to be sent, excluding confirmPassword
    const postData = { ...this.registerForm.value };
    delete postData.confirmPassword;

    // Call the registerUser method from AuthService
    this.registerService.registerUser(postData as RegisterPostData).subscribe({
      next: (response) => {
        // Show success message and navigate to login page
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'User registered successfully',
        });
        this.router.navigate(['/login']);
        console.log(response);
      },
      error: (err) => {
        // Show error message in case of failure
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Something went wrong',
        });
        console.log(err);
      }
    });
  }

  // Getter methods for form controls
  get fullName() {
    return this.registerForm.controls['fullName'];
  }
  get email() {
    return this.registerForm.controls['email'];
  }
  get password() {
    return this.registerForm.controls['password'];
  }
  get confirmPassword() {
    return this.registerForm.controls['confirmPassword'];
  }
}
