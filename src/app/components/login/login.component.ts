// Import necessary modules and services
import { MessageService } from 'primeng/api';
import { Component, inject } from '@angular/core';
// We can create forms in two ways: reactive and template-driven
// The login form will be template-driven
// The register form will be reactive
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { User } from '../../interfaces/auth';

@Component({
  selector: 'app-login', // Component selector
  standalone: true, // Indicates this component is standalone
  imports: [CardModule, InputTextModule, PasswordModule, ButtonModule, FormsModule, RouterLink], // Modules to import
  templateUrl: './login.component.html', // Template URL
  styleUrl: './login.component.css' // Style URL
})
export class LoginComponent {
  // Define the login form model
  login = {
    email: '',
    password: '',
  };

  // Inject necessary services
  private authService = inject(AuthService);
  private router = inject(Router);
  private messageService = inject(MessageService);

  // Method to handle login
  onLogin() {
    const { email, password } = this.login; // Destructure email and password from login model
    this.authService.getUserDetails(email, password).subscribe({
      next: (response: User[]) => {
        if (response.length >= 1) {
          // If user details are found, store email in session storage and navigate to home
          sessionStorage.setItem('email', email);
          this.router.navigate(['home']);
        } else {
          // If no user details are found, show error message
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'Something went wrong',
          });
          console.log(response);
        }
      },
      error: (err) => {
        // Handle error scenario
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Something went wrong',
        });
        console.log(err);
      }
    });

    console.log(this.login); // Log the login model
  }
}
