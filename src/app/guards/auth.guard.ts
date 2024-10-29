// Import necessary modules and services
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

// Define an authentication guard function
export const authGuard: CanActivateFn = (route, state) => {
  // Check if the user's email is stored in session storage
  if (sessionStorage.getItem('email')) {
    return true; // Allow navigation if email is found
  } else {
    // If email is not found, inject the Router service
    const router = inject(Router);
    // Navigate to the login page
    router.navigate(['login']);
    return false; // Prevent navigation
  }
};
