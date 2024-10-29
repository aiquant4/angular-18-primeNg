import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { authGuard } from './guards/auth.guard';

// Define the routes for the application
export const routes: Routes = [
    // Route for the login page
    { path: 'login', component: LoginComponent },
    // Route for the registration page
    { path: 'register', component: RegisterComponent },
    // Route for the home page, protected by an auth guard
    { path: 'home', component: HomeComponent, canActivate: [authGuard] },
    // Default route redirects to the home page
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    // Wildcard route for handling undefined paths (currently commented out)
    // { path: '**', redirectTo: '...NO PAGE FOUND...' }
];
