// Import necessary modules and services
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-root', // Component selector
  standalone: true, // Indicates this component is standalone
  imports: [RouterOutlet, ButtonModule, ToastModule], // Modules to import
  providers: [MessageService], // Provide the MessageService
  templateUrl: './app.component.html', // Template URL
  styleUrl: './app.component.css' // Style URL
})
export class AppComponent {
  title = 'angular-18-primeng-app'; // Title of the application

  // The MessageService is used to display toast messages for user notifications.
  // It allows you to show success, error, info, and warning messages in a consistent and user-friendly manner.
  // For example, you can use it to show a success message when a user logs in or registers successfully,
  // or an error message if something goes wrong.
}
