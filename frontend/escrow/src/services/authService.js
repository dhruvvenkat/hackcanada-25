/**
 * Authentication Service
 * ----------------------
 * This service handles user authentication by sending login requests to the backend API.
 * It provides a function to send user credentials and retrieve authentication tokens.
 *
 * Usage:
 * - The function `loginUser(email, password)` is used to send login credentials.
 * - If successful, the backend returns a response containing authentication details.
 * - The function returns a JSON object containing the authentication result.
 *
 * API Endpoint:
 * - POST `YOUR_BACKEND_API/login`
 * - Request Body: `{ email: string, password: string }`
 * - Response: `{ success: boolean, token?: string, error?: string }`
 *
 * Error Handling:
 * - If the request fails (network error, server issues), an error message is logged.
 * - The function returns `{ success: false }` in case of failure.
 */

// src/services/authService.js
export const loginUser = async (email, password) => {
    try {
      const response = await fetch("YOUR_BACKEND_API/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      return await response.json();
    } catch (error) {
      console.error("Login failed:", error);
      return { success: false };
    }
  };