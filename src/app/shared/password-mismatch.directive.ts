// Import necessary modules from Angular forms
import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

// Define a custom validator function to check for password mismatch
export const passwordMismatchValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    // Get the password and confirmPassword controls from the form group
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');

    // Check if both controls exist and if their values do not match
    return password && confirmPassword && password.value !== confirmPassword.value 
        // If they do not match, return an error object with the key 'passwordMismatch'
        ? { passwordMismatch: true } 
        // If they match, return null indicating no errors
        : null;
};
