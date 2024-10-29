// Import necessary modules and services
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterPostData, User } from '../interfaces/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' // This service will be available throughout the application
})
export class AuthService {
  private baseUrl = 'http://localhost:3000'; // Base URL for the API

  constructor(private http: HttpClient) { }

  // Method to register a new user
  registerUser(postData: RegisterPostData) {
    return this.http.post(`${this.baseUrl}/users`, postData); // Send a POST request to the API
  }

  // Method to check if a user is already registered
  getUserDetails(email: string, password: string): Observable<User[]> {
    return this.http.get<User[]>(
      `${this.baseUrl}/users?email=${email}&password=${password}` // Send a GET request to the API with email and password as query parameters
    );
  }
}
