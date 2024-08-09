"use client";

import { useQueryClient } from "@tanstack/react-query";
import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { AuthContextType } from "../@types/authTypes";

/**
 * Creates a React context for authentication, which will be used to
 * manage and provide authentication state and actions across the application.
 */
const AuthContext = createContext<AuthContextType | undefined>(undefined);

/**
 * @component AuthProvider
 *
 * Provides authentication context to its children components. It manages
 * the authentication state using React's useState and persists the state
 * in localStorage. The component also clears the react-query cache upon logout.
 *
 * @param {ReactNode} children - The child components that will consume the authentication context.
 * @returns {JSX.Element} The AuthContext provider with authentication state and actions.
 */
export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const queryClient = useQueryClient();

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setIsAuthenticated(true);
    }
  }, []);

  /**
   * Logs the user in by setting the authenticated state to true
   * and storing the username in localStorage.
   *
   * @param {string} username - The username of the user logging in.
   */
  const login = (username: string) => {
    setIsAuthenticated(true);
    localStorage.setItem("username", username);
  };

  /**
   * Logs the user out by resetting the authentication state, removing
   * the username from localStorage, and clearing the react-query cache.
   */
  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("username");
    queryClient.clear();
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

/**
 * Custom hook that provides easy access to the AuthContext.
 *
 * @throws Will throw an error if used outside of an AuthProvider.
 * @returns {AuthContextType} The authentication context, including state and actions.
 */
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
