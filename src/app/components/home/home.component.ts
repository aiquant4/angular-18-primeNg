// Import necessary modules and services
import { Router } from '@angular/router';
import { Component, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-home', // Component selector
  standalone: true, // Indicates this component is standalone
  imports: [ButtonModule], // Modules to import
  templateUrl: './home.component.html', // Template URL
  styleUrl: './home.component.css' // Style URL
})
export class HomeComponent {

  // Inject the Router service
  private router = inject(Router);

  // Method to handle logout
  logOut() {
    // On logout, clear session storage and redirect back to the login page
    sessionStorage.clear();
    this.router.navigate(['login']);
  }
}
