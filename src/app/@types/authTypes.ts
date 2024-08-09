/**
 * @interface Login
 *
 * This interface represents the structure of the login data
 * required for user authentication. It includes the user's
 * email and password.
 *
 * @property {string} email - The email address of the user.
 * This is required for logging into the application.
 *
 * @property {string} password - The password associated with
 * the user's email. This is required for authentication.
 */
export interface Login {
  email: string;
  password: string;
}

/**
 * @interface AuthContextType
 *
 * Defines the structure of the authentication context, including
 * the authentication state and functions for logging in and out.
 *
 * @property {boolean} isAuthenticated - Indicates if the user is currently authenticated.
 * @property {(username: string) => void} login - Logs the user in and stores the username.
 * @property {() => void} logout - Logs the user out, clears the username, and resets authentication state.
 */
export interface AuthContextType {
  isAuthenticated: boolean;
  login: (username: string) => void;
  logout: () => void;
}
