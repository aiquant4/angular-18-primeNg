// Import necessary modules and functions
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [
    // Enable zone change detection with event coalescing to improve performance
    provideZoneChangeDetection({ eventCoalescing: true }), 
    // Provide the router configuration
    provideRouter(routes),
    // Provide the HTTP client for making HTTP requests
    provideHttpClient(),
    // Enable animations, useful for toast notifications and other UI elements
    provideAnimations(),
  ]
};
