// Define an interface for the registration post data
export interface RegisterPostData {
    fullName: string; // User's full name
    email: string;    // User's email address
    password: string; // User's password
}

// Define an interface for the user, extending the registration post data
export interface User extends RegisterPostData {
    id: string; // Unique identifier for the user
}
